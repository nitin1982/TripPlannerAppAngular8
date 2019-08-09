export interface LoggedInAppUserInfo{
    id: number;
    name: string;
    token: string;
    email: string;
    expiry: Date;
    isNewPassword: boolean;
}