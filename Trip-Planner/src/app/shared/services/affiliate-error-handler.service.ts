import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AffiliateAppLoggingService } from './affiliate-logging.service';

@Injectable({
  providedIn: 'root'
})
export class AffiliateAppErrorHandlerService {

  constructor(private loggingService: AffiliateAppLoggingService){}
    
    handleError(error: Error | HttpErrorResponse){ 
        console.error(error);             
        let errorMessage='';
        if (error instanceof HttpErrorResponse) {
            // Server or connection error happened
            if (!navigator.onLine) {
              // Handle offline error
            } else {
              // Handle Http Error (error.status === 403, 404...)
            }
         } else {
           // Handle Client Error (Angular Error, ReferenceError...) 
           errorMessage = error.message;    
         }        
        this.loggingService.add(`Error occured in application: ${errorMessage}`);
    }
}
