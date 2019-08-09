import { Injectable } from '@angular/core';
import { Stay } from '../../models/stay';

@Injectable({
  providedIn: 'root'
})
export class StayService {

  constructor() { }

  saveStay(stayToSave: Stay){}

}
