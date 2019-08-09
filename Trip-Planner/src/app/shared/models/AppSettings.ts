import { environment } from "../../../environments/environment";

export class AppSettings{
    packtPortalAPIBaseUrl: string;
    affiliateSalesMarketsApiUrl: string = "/api/AffiliateSalesMarkets";
    affiliateWeeklyRevenues: string = "/api/AffiliateWeeklyRevenues"; 
    affiliateYearWeeks: string = "/api/AffiliateYearWeeks";
    packtAppSecurityToken: string = "/api/Users/Token";

    packtGetAppUser: string = "/api/Users/";
    affiliateAppUserForgotPassword: string = "/api/Users/EmailNewPassword";
    affiliateAppUserResetPassword: string = "/api/Users/ResetPassword";
    
    affiliateAppUserResetPasswordSuccessfullyMsg: string = "Password reset successfully.";
    passwordSentToEmailSuccessfullyMsg = "Your new password has been sent to your email.";
    incorrectCredentialsForgotPasswordMsg = "Please enter valid Email/User Name and click on 'Forgot Password?' to receive password on the email we have in our file.";
    noAffiliateSalesMarketsSelected = "No affiliates/sales markets selected to get performance data.";
    noDataSelected = "No Data Selected";
    debounceTime: number = 1000;

    selectAllText: string = 'SELECT ALL';

    constructor(){
        this.packtPortalAPIBaseUrl = environment.PacktPortalAPIServerUrl;
    }
}