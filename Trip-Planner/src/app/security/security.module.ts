import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';

// import { AuthGuard } from "./services/auth-guard.service";
import { FormsModule } from '@angular/forms';
// import { LoginComponent } from "./components/login/login.component";
// import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { MatchTwoStrings } from "./validators/match-two-strings.directive";
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
    declarations:[LoginComponent, MatchTwoStrings, SignupComponent],
    imports:[ BrowserModule, FormsModule],
    exports:[LoginComponent],
    providers:[]
})

export class SecurityModule {

}