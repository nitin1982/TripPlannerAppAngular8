import { Component, OnInit, ViewChild} from "@angular/core";
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AppUser } from '../../models/appUser';

@Component({
    selector: 'sign-up',
    templateUrl: './signup.component.html'    
})

export class SignupComponent implements OnInit {

    @ViewChild('frmSignup',null) frm : any;
    loggedIn: boolean = false;
    user: AppUser;    
    constructor(private userService: UserService, private router: Router){}

    ngOnInit(): void { 
     this.user = {
         fName: '',
         lName: '',
         email: '',
         pwd: ''
        }
    }

    Submit(){   
        let user: AppUser = this.frm.value as AppUser;                   
        if(this.frm.valid){
            //console.log(user);

            this.userService.signupNewUser(user).subscribe(
                data => {
                    console.log(data);
                    this.frm.reset();
                    this.router.navigate(['Home']);
                });
        }
    }

    Clear(){        
        this.frm.reset();
    }
}