import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AffiliateAppLoggingService } from './affiliate-logging.service';
import { Router } from '@angular/router';
import { UserService } from '../../security/services/user.service';

export type HandleError = <T>(operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable({
  providedIn: 'root'
})
export class AffiliateHttpErrorHandlerService {
  
  constructor(private loggingService: AffiliateAppLoggingService, private router: Router, private injector: Injector) { }

  createHandleError = (serviceName = '') => <T>(operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);

  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      //console.error(error);      
      let message = '';
      
      if (error.error instanceof ErrorEvent) {
        message = error.error.message;
      } else {        
        if (error.status == 0) {
          message = `No valid response from Server. Please contact support team.`;
        }
        else {
          if(error.error.StatusCode === 400){            
            message = `Bad API request - ${error.error.Message}`;
          }else if(error.error.StatusCode === 404){
            message = `Not Found Error - ${error.error.Message}`;
          }else if(error.status === 401){
            message = `Session expired, please sign in again."`;      
            //this.router.navigate(['Login']);    
          }
          else{
            message = `server returned code ${error.status} with body "${error.error}"`;
          }
        }
      }

      this.loggingService.add(`${serviceName}: ${operation} failed: ${message}`, message);
      return of(result);
    };
  }
}
