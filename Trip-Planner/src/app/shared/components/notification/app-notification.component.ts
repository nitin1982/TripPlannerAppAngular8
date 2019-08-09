import { Component, OnInit } from '@angular/core';
import { AffiliateNotificationService } from '../../services/affiliate-notification.service';
import { AffiliateAppNotification, AffiliateAppNotificationType } from '../../models/AffiliateAppNotification';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    animations: [
        // the fade-in/fade-out animation.
    // the trigger name does not matter, but it must match the name of the [@...] attribute in the template.
    trigger('simpleFadeAnimation', [

        // the "in" style determines the "resting" state of the element when it is visible.
        // the style name "in" must match the value of the [@simpleFadeAnimation]="'in'" attribute in the template
        state('in', style({opacity: 1})),
  
        // fade in when created. this could also be written as transition('void => *')
        transition(':enter', [
          // the styles start from this point when the element appears
          style({opacity: 0}),
          // and animate toward the "in" state above
          animate(600 )
        ]),
  
        // fade out when destroyed. this could also be written as transition('void => *')
        transition(':leave',
          // fading out uses a different syntax, with the "style" being passed into animate()
          animate(600, style({opacity: 0})))
      ])
    ]    
})
export class AppNotificationComponent implements OnInit {
    alerts: AffiliateAppNotification[] = [];
    constructor(private notificationService: AffiliateNotificationService) { }

    ngOnInit(): void {         
        this.notificationService.getAlert().subscribe((alert: AffiliateAppNotification) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }

            // add alert to array            
            this.alerts.push(alert);            
            setTimeout(() => {  
                this.alerts = this.alerts.filter(x => x !== alert);                
            }, 4000);
        });
    }

    removeAlert(alert: AffiliateAppNotification) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
 
    cssClass(alert: AffiliateAppNotification) {
        if (!alert) {
            return;
        }
 
        // return css class based on alert type
        switch (alert.type) {
            case AffiliateAppNotificationType.Success:
                return 'alert alert-success';
            case AffiliateAppNotificationType.Error:
                return 'alert alert-danger';
            case AffiliateAppNotificationType.Info:
                return 'alert alert-info';
            case AffiliateAppNotificationType.Warning:
                return 'alert alert-warning';
        }
    }
}
