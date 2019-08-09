export interface AffiliateAppNotification {
    type: AffiliateAppNotificationType;
    message: string;
}
 
export enum AffiliateAppNotificationType {
    Success,
    Error,
    Info,
    Warning
}