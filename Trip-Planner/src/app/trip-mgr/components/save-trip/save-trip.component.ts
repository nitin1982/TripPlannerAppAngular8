import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TripService } from '../../servics/trip/trip.service';
import { Trip } from '../../models/trip';

@Component({
  selector: 'app-save-trip',
  templateUrl: './save-trip.component.html',
  styleUrls: ['./save-trip.component.scss']
})
export class SaveTripComponent implements OnInit {
  private tripToSave: Trip;
  @ViewChild('frmSaveTrip', null) frm: any;
  savingInProgress: boolean = false;
  private enableUpdateStay: boolean = true; 
  constructor(private route: ActivatedRoute, private router: Router, private tripService: TripService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.tripService.getTripById(+params.get('id'))
      )).subscribe(trip => {
        if (trip){
          // console.log('Test');
          // console.log(trip);
          this.tripToSave = trip;
        }
          
        else{
          this.tripToSave = {
            name: '',
            detail: '',
            id: 0
          } as Trip;
        }
    });
  }

  Submit() {
    this.savingInProgress = true;
    if (this.frm.valid) {      
      this.tripService.SaveTrip(this.tripToSave).subscribe(updatedTrip => {
        this.tripToSave = updatedTrip;
        this.tripService.activeTrip = updatedTrip;
      });
    }
    this.Clear();
  }

  Clear() {
    this.savingInProgress = false;
    this.frm.reset();
  }

  navigateToStay(){
    this.router.navigate(['Trips',this.tripToSave.id, 'Stay']);
  }
}
