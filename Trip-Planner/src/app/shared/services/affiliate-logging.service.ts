import { Injectable, Injector } from '@angular/core';
import { AffiliateAppNotificationType } from '../models/AffiliateAppNotification';
import { AffiliateNotificationService } from './affiliate-notification.service';

@Injectable({
  providedIn: 'root'
})
export class AffiliateAppLoggingService {

  private alertService: AffiliateNotificationService;
  constructor(private injector: Injector){
    
  }
  messages: string[] = [];

  add(logMessage: string, notificationMessage: string = '', type: AffiliateAppNotificationType = AffiliateAppNotificationType.Error) {
    this.messages.push(logMessage);
    this.alertService = this.injector.get(AffiliateNotificationService);
    if(!notificationMessage)
      notificationMessage = 'An error has occured in the application. Please contact support team.';

    if(type == AffiliateAppNotificationType.Warning)    {
      this.alertService.warn(notificationMessage);
    }else if(type == AffiliateAppNotificationType.Success){
      this.alertService.success(notificationMessage);
    }else
    {
      this.alertService.Notify(AffiliateAppNotificationType.Error, notificationMessage);
    }
  }

  clear() {
    this.messages = [];
  }
}
