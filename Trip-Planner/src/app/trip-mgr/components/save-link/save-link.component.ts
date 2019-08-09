import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TripService } from '../../servics/trip/trip.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { WebLink } from '../../models/webLink';

@Component({
  selector: 'app-save-link',
  templateUrl: './save-link.component.html',
  styleUrls: ['./save-link.component.scss']
})
export class SaveLinkComponent implements OnInit {
  tripId: number;
  linkToEdit: WebLink;

  constructor(private route: ActivatedRoute, private router: Router, private tripService: TripService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of({ trip: this.tripService.getTripById(+params.get('tripId')), linkId: +params.get('linkId') })
      )).subscribe(tripDetail => {
        if (tripDetail) {
          tripDetail.trip.subscribe(data => {
            this.tripId = data.id;
            this.tripService.setActiveTrip(data);
            this.linkToEdit = data.webLinks.find(x => x.id == tripDetail.linkId);
          });

        }
      });
  }

  NavigateToLinks(){
    this.router.navigate(['./Trips', this.tripId, 'Links']);
  }
}
