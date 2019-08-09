export interface LoggedInAppUser{
    id: number;
    name: string;
    email: string;    
    roles: string[];
    token: string;
    currentTokenExpiry: Date;    
    isNewPassword: boolean;
}