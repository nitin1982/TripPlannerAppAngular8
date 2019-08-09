import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TripService } from '../../servics/trip/trip.service';
import { Address } from '../../models/address';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-save-address',
  templateUrl: './save-address.component.html',
  styleUrls: ['./save-address.component.scss']
})
export class SaveAddressComponent implements OnInit {

  tripId: number;
  addressId: number;
  addressToEdit: Address;
  constructor(private route: ActivatedRoute, private router: Router, private tripService: TripService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of({ trip: this.tripService.getTripById(+params.get('tripId')), addressId: +params.get('addressId') })
      )).subscribe(tripDetail => {
        if (tripDetail) {
          tripDetail.trip.subscribe(data => {
            console.log(data);
            this.tripId = data.id;
            this.tripService.setActiveTrip(data);
            this.addressToEdit = data.addresses.find(x => x.id == tripDetail.addressId);
          });

        }
      });
  }

  NavigateToAddresses() {
    this.router.navigate(['./Trips', this.tripId, 'Addresses']);
  }

  Submit() {

  }
}
