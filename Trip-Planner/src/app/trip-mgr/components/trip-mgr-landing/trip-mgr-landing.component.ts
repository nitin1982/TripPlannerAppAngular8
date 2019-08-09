import { Component, OnInit, ViewChild, AfterViewInit, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { TripService } from '../../servics/trip/trip.service';
import { Trip } from '../../models/trip';
import { SaveTripComponent } from '../save-trip/save-trip.component';

@Component({
  selector: 'app-trip-mgr-landing',
  templateUrl: './trip-mgr-landing.component.html',
  styleUrls: ['./trip-mgr-landing.component.scss']
})

export class TripMgrLandingComponent implements OnInit, AfterContentChecked  {
  private activeTrip: Trip;

  constructor(private tripService: TripService, private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    this.tripService.activeTripObject.subscribe(trip => {
      this.activeTrip = trip;
      console.log(trip);
      this.cdref.detectChanges();
    });
  }

  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
  }

}
