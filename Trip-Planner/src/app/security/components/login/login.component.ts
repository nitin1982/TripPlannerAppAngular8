import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { AffiliateNotificationService } from 'src/app/shared/services/affiliate-notification.service';
import { AppSettings } from 'src/app/shared/models/AppSettings';
import { AffiliateAppSettingsService } from 'src/app/shared/services/affiliate-settings.service';


@Component({
    selector: 'affiliate-app-login',
    templateUrl: './login.component.html'    
})

export class LoginComponent implements OnInit {
    @ViewChild('frmLogin',null) frm : any;
    user: User;    
    forgotPassword: boolean = false;
    signingInProgress: boolean = false;
    loggedIn: boolean = false;
    private settings: AppSettings;
    constructor(private userService: UserService, private router: Router, 
        private alertService: AffiliateNotificationService,
        private appSettingsService: AffiliateAppSettingsService) { 
            this.appSettingsService.getSettings().subscribe(data => this.settings = data);
    }

    ngOnInit(): void { 
        this.user = {userName: '', password: ''};                
    }

    toggleForgotPassword(trueFalse: number){
        this.forgotPassword = (trueFalse == 1);
    }
    Submit(){      
        this.signingInProgress = true;
        let user: User = this.frm.value as User;                   
        if(this.frm.valid && !this.forgotPassword){
            // this.userService.mockedLoginMethod().subscribe(val => {
            //     this.signingInProgress = false;
            //         if(!this.userService.redirectUrl)
            //             this.userService.redirectUrl = 'Trips';
            //         //console.log(val);
            //         this.router.navigate([this.userService.redirectUrl]);                    
            // });
            this.userService.login(user).subscribe(val => 
                {   
                    this.signingInProgress = false;
                    if(!this.userService.redirectUrl)
                        this.userService.redirectUrl = 'Trips';
                    console.log(val);
                    
                    if(val){
                        if(val.isNewPassword){
                            this.router.navigate(['ResetPassword']);
                        }else if(this.userService.redirectUrl){
                            this.router.navigate([this.userService.redirectUrl]);
                        }
                        
                    }
                }
            );
        }

        if(this.forgotPassword){
            this.router.navigate(['Signup']);
        }
    }

    Clear(){
        this.signingInProgress = false;
        this.frm.reset();
    }
}
