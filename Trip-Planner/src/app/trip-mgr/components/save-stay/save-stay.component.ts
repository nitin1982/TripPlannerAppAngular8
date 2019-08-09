import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TripService } from '../../servics/trip/trip.service';
import { Trip } from '../../models/trip';
import { Stay } from '../../models/stay';

@Component({
  selector: 'app-save-stay',
  templateUrl: './save-stay.component.html',
  styleUrls: ['./save-stay.component.scss']
})
export class SaveStayComponent implements OnInit {
  private stayToSave: Stay;
  @ViewChild('frmSaveTrip', null) frm: any;
  savingInProgress: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private tripService: TripService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.tripService.getTripById(+params.get('tripId'))
      )).subscribe(trip => {
        if (trip){
          this.stayToSave = trip.stay;
          console.log(this.stayToSave);
        }
          
        else
          this.stayToSave = {
            name: '',
            detail: ''
          } as Stay;

          console.log(this.stayToSave.id > 0);
        //this.enableUpdateStay = ((this.tripToSave != null) && this.tripToSave.id > 0);
    });
  }

  navigateToAddresses(){
    //console.log('Test')
    //this.router.navigate(['Trips',this.tripToSave.id, 'Addresses']);
    this.router.navigate(['Trips',101, 'Addresses']);
  }

  Submit() {
    this.savingInProgress = true;
    // if (this.frm.valid) {      
    //   this.tripService.SaveTrip(this.tripToSave).subscribe(updatedTrip => {
    //     this.tripToSave = updatedTrip;
    //     this.tripService.activeTrip = updatedTrip;
    //   });
    // }
    //this.Clear();
  }

}
