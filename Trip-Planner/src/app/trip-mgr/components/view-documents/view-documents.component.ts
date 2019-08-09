import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from '../../servics/trip/trip.service';

@Component({
  selector: 'app-view-documents',
  templateUrl: './view-documents.component.html',
  styleUrls: ['./view-documents.component.scss']
})
export class ViewDocumentsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private tripService: TripService) { }

  ngOnInit() {
  }
  
  navigateToLinks(){
    this.router.navigate(['Trips',101, 'Links']);
  }
  
  navigateToSaveDocument(){
    this.router.navigate(['Trips',101, 'Documents','Add']);
  }
}
