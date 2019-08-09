import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AffiliateAppNotification, AffiliateAppNotificationType } from '../models/AffiliateAppNotification';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AffiliateNotificationService {

  private subject = new Subject<AffiliateAppNotification>();
    private keepAfterRouteChange = false;
 
    constructor(private router: Router) {
        //clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
 
    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }
 
    success(message: string, keepAfterRouteChange = false) {
        this.Notify(AffiliateAppNotificationType.Success, message, keepAfterRouteChange);
    }
 
    error(message: string, keepAfterRouteChange = false) {
        this.Notify(AffiliateAppNotificationType.Error, message, keepAfterRouteChange);
    }
 
    info(message: string, keepAfterRouteChange = false) {
        this.Notify(AffiliateAppNotificationType.Info, message, keepAfterRouteChange);
    }
 
    warn(message: string, keepAfterRouteChange = false) {
        this.Notify(AffiliateAppNotificationType.Warning, message, keepAfterRouteChange);
    }
 
    Notify(type: AffiliateAppNotificationType, message: string, keepAfterRouteChange = false) {
        console.log(message);
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next(<AffiliateAppNotification>{ type: type, message: message });
    }
 
    clear() {
        // clear alerts
        this.subject.next();
    }
}
