import { Injectable } from '@angular/core';
import { Observable, of, throwError, forkJoin, Subject } from 'rxjs';
import { tap, delay, catchError, map, flatMap } from 'rxjs/operators';
import { User } from '../models/user';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoggedInAppUser } from '../models/LoggedInAppUser';
import { LoggedInAppUserInfo } from '../models/LoggedInAppUserInfo';
import { AppSettings } from 'src/app/shared/models/AppSettings';
import { HandleError, AffiliateHttpErrorHandlerService } from 'src/app/shared/services/affiliate-http-error-handler.service';
import { AffiliateAppSettingsService } from 'src/app/shared/services/affiliate-settings.service';

import { ResetPassword } from '../models/ResetPassword';
import { ResetPasswordResult } from '../models/ResetPasswordResult';
import { AppUser } from '../models/appUser';
// import { HandleError, AffiliateHttpErrorHandlerService } from '../../shared/services/affiliate-http-error-handler.service';
// import { AppSettings } from '../../shared/models/AppSettings';
// import { AffiliateAppSettingsService } from '../../shared/services/affiliate-settings.service';
// import { LoggedInAppUser } from '../models/LoggedInAppUser';
// import { LoggedInAppUserInfo } from '../models/LoggedInAppUserInfo';
// import { ResetPassword } from '../models/ResetPassword';
// import { ResetPasswordResult } from '../models/ResetPasswordResult';
// import { ForgotPasswordResult } from '../models/ForgotPasswordResult';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  isLoggedIn: boolean;  
  isLoggedInSub: Subject<boolean> = new Subject<boolean>();
  signingInUser: User;
  redirectUrl: string;
  loggedInUser: LoggedInAppUser;
  loggedInUserInfo: LoggedInAppUserInfo;
  private settings: AppSettings;
  private handleError: HandleError;

  constructor(private http: HttpClient, private router: Router, 
            private httpErrorHandler: AffiliateHttpErrorHandlerService, 
            private appSettingsService: AffiliateAppSettingsService) {
                  
    this.appSettingsService.getSettings().subscribe(data => this.settings = data);
    this.handleError = httpErrorHandler.createHandleError('LoginService');
  }

  login(user: User): Observable<LoggedInAppUser> {
    var appSecurityTokenUrl = this.settings.packtPortalAPIBaseUrl + this.settings.packtAppSecurityToken;
    if (user) {
        return this.http.post<LoggedInAppUser>(appSecurityTokenUrl, user).pipe(
            catchError(this.handleError('Login', {} as LoggedInAppUser)), 
            delay(2000),           
            tap(val => {
                if (val && val.token) {
                    this.isLoggedIn = true;                    
                    this.isLoggedInSub.next(true);
                    this.loggedInUser = val;
                    this.loggedInUserInfo = {
                        id: val.id,
                        email: val.email,
                        name: val.name,
                        token: val.token,
                        expiry: val.currentTokenExpiry,
                        isNewPassword: val.isNewPassword
                    };
                    this.setLocalStorage();
                }
            })
        );
    }
  }
  
  mockedLoginMethod(): Observable<boolean> {
    this.loggedInUserInfo = {
        id: 1,
        email: 'nitin.rastogi@packt.com',
        name: 'Nitin Rastogi',
        token: 'abcdefgh',
        expiry: null,
        isNewPassword: true
    };
    return of(true).pipe(delay(1000), tap(val => {
        this.isLoggedIn = true;                     
        this.isLoggedInSub.next(true);
    }));
 }

 signupNewUser(user: AppUser):Observable<AppUser>{
    var appSignUpUser = this.settings.packtPortalAPIBaseUrl + this.settings.packtGetAppUser;
    if (user) {
        return this.http.post<AppUser>(appSignUpUser, user).pipe(
            catchError(this.handleError('signupNewUser', {} as AppUser))
        );
    }
 }

  resetPassword(resetPwd: ResetPassword): Observable<ResetPasswordResult>{

    var appResetUserPasswordUrl = this.settings.packtPortalAPIBaseUrl + this.settings.affiliateAppUserResetPassword;
    if (resetPwd) {
        return this.http.post<ResetPasswordResult>(appResetUserPasswordUrl, resetPwd).pipe(
            catchError(this.handleError('resetPassword', {PasswordUpdatedSuccessfully: false} as ResetPasswordResult))
        );
    }
    return of(null);
  }

  logOut() {      
      this.isLoggedIn = false;
      this.isLoggedInSub.next(false);
      this.signingInUser = { userName: '', password: '' };
      this.redirectUrl = '';
      localStorage.removeItem("AuthToken");
      
  }

  setLocalStorage() {
      console.log('Test');
      localStorage.removeItem("AuthToken");
      localStorage.setItem("AuthToken", JSON.stringify(this.loggedInUserInfo));
  }

  getLocalStorage(k: string): LoggedInAppUserInfo {      
      var val = localStorage.getItem(k);
      let loggedInAppUserInfo: LoggedInAppUserInfo = (val)?JSON.parse(val):{email:'', name:'', token:'', expiry: '', id: 0};
      return loggedInAppUserInfo;
  }

  checkUserLoggedInOrNot(): Observable<LoggedInAppUser>{      
    let user: LoggedInAppUserInfo = this.getLocalStorage('AuthToken');    
    if(user != null && user.email != ''){        
    this.loggedInUserInfo = user;
    if(!this.loggedInUser){          
        var url = this.settings.packtPortalAPIBaseUrl + this.settings.packtGetAppUser + user.email;        
        return this.http.get<LoggedInAppUser>(url).pipe(
            catchError(this.handleError('Login', null)), 
            tap(val => {
                if (val) {             
                    this.isLoggedIn = true;                    
                    this.isLoggedInSub.next(true);
                    this.loggedInUser = val;                       
                }else{
                    this.isLoggedInSub.next(false);
                }})
        );
    }else{
        
        return of(this.loggedInUser);
    }
    }
    return of(null);
  }
}
