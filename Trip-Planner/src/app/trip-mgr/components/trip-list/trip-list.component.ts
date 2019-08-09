import { Component, OnInit } from '@angular/core';
import { TripService } from '../../servics/trip/trip.service';
import { Trip } from '../../models/trip';
import { Router } from '@angular/router';
import { UserService } from 'src/app/security/services/user.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {

  allTrips: Trip[];
  constructor(private tripService: TripService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    
    this.tripService.getAllTripsForCurrentUser(this.userService.loggedInUserInfo.id).subscribe(
      tripData => {
        console.log(tripData);
        this.allTrips = tripData;
      
      });
  }

  AddNewTrip(){
    this.tripService.setActiveTrip({
      name: '',
      detail: '',
      id: 0
    } as Trip);
    this.router.navigate(['Trips',0,'Edit']);
  }

  EditTrip(id){
    console.log(id);
    this.tripService.getTripById(id).subscribe(trp => {
      this.tripService.setActiveTrip(trp);
      this.router.navigate(['Trips',id,'Edit']);
    });
  }
}
