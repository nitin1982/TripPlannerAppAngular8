import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable} from 'rxjs';

import { UserService } from '../../security/services/user.service';


@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
    
    constructor(private userService: UserService){}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.userService.getLocalStorage("AuthToken").token}`
          }
        });
    
        return next.handle(request);
    }

   
}