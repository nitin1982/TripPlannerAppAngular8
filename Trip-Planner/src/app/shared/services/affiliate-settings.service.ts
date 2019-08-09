import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppSettings } from '../models/AppSettings';



@Injectable({
  providedIn: 'root'
})
export class AffiliateAppSettingsService {

  constructor() { }

  getSettings(): Observable<AppSettings>{
    let appSettings: AppSettings = new AppSettings();
    return of(appSettings);
  }
  
}
