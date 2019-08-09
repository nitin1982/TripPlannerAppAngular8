import { Component, OnInit } from '@angular/core';
import { WebLink } from '../../models/webLink';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TripService } from '../../servics/trip/trip.service';

import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-view-links',
  templateUrl: './view-links.component.html',
  styleUrls: ['./view-links.component.scss']
})
export class ViewLinksComponent implements OnInit {

  tripLinks: WebLink[];
  tripId: number;
  constructor(private route: ActivatedRoute, private router: Router, private tripService: TripService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.tripService.getTripById(+params.get('tripId'))
      )).subscribe(trip => {
        if (trip) {
          this.tripId = trip.id;
          this.tripLinks = trip.webLinks;
          this.tripService.setActiveTrip(trip);
        }
      });
  }

  EditLink(id){
    this.router.navigate(['Trips', this.tripId, 'Links', id, 'Edit']);
  }
  navigateToSaveLink(){
    this.router.navigate(['Trips', 101, 'Links', 0, 'Edit']);
  }
}
