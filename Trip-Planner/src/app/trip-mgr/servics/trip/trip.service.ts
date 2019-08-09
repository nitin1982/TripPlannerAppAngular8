import { Injectable } from '@angular/core';
import { Trip } from '../../models/trip';
import { Observable, of, Subject } from 'rxjs';
import { Stay } from '../../models/stay';
import { allTrips } from '../../models/allTrips';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private _activeTrip: Trip;
  activeTripObject: Subject<Trip> = new Subject<Trip>();
  constructor(private http: HttpClient) { 
    this.activeTripObject.next(this._activeTrip);
  }
  
  get activeTrip(): Trip{
    return this._activeTrip;
  }

  set activeTrip(trip: Trip){
    this._activeTrip = trip;    
  }

  setActiveTrip(trip: Trip){
    this._activeTrip = trip;
    this.activeTripObject.next(trip);
  }
  
  SaveTrip(tripToSave: Trip): Observable<Trip>{
    tripToSave.id = 101;
    return of(tripToSave);
  }

  getTripById(id: number): Observable<Trip>{
    if(id > 0){
      //return of(allTrips.find(x => x.id == id));
      var url = 'http://localhost:62953/api/trips/' + id;
      return this.http.get<Trip>(url);
    }else{
      return of(null);
    }
  }

  getAllTripsForCurrentUser(userId: number):Observable<Trip[]>{
    var url = 'http://localhost:62953/api/users/'+ userId +'/Trips';
    return this.http.get<Trip[]>(url);    
  }
  
}
