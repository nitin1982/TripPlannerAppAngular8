import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TripService } from '../../servics/trip/trip.service';
import { Address } from '../../models/address';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-addresses',
  templateUrl: './view-addresses.component.html',
  styleUrls: ['./view-addresses.component.scss']
})
export class ViewAddressesComponent implements OnInit {

  tripAddresses: Address[];
  tripId: number;

  constructor(private route: ActivatedRoute, private router: Router, private tripService: TripService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.tripService.getTripById(+params.get('tripId'))
      )).subscribe(trip => {
        if (trip) {
          this.tripId = trip.id;
          this.tripAddresses = trip.addresses;
          this.tripService.setActiveTrip(trip);
        }
      });
  }

  navigateToDocuments() {
    this.router.navigate(['Trips', 101, 'Documents']);
  }
  navigateToSaveAddress() {
    this.router.navigate(['Trips', 101, 'Addresses', 0, 'Edit']);
  }

  EditAddress(addressId){
    let addressToEdit = this.tripAddresses.find(x => x.id = addressId);
    this.router.navigate(['Trips', this.tripId, 'Addresses', addressId, 'Edit']);
  }
}
