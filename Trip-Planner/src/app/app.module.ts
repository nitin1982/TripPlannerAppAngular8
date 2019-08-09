import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { NavigationComponent } from './navigation/navigation.component';
import { AppNotificationComponent } from './shared/components/notification/app-notification.component';
import { SecurityModule } from './security/security.module';
import { AffiliateAppErrorHandlerService } from './shared/services/affiliate-error-handler.service';
import { AuthTokenInterceptor } from './shared/interceptors/auth-token.interceptor';
import { HomeModule } from './home/home.module';
import { TripMgrModule } from './trip-mgr/trip-mgr.module';


@NgModule({
  declarations: [
    AppComponent, NavigationComponent, AppNotificationComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, SecurityModule, HttpClientModule, HomeModule, TripMgrModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: AffiliateAppErrorHandlerService
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
