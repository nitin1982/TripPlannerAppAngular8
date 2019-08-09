import { Injectable } from '@angular/core';
import { InfoDocument } from '../../models/infoDocument';
import { Observable, of } from 'rxjs';
import { Photo } from '../../models/photo';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor() { }

  saveInfoDocument(doc: InfoDocument): Observable<InfoDocument>{
    return of(doc);
  }

  savePhoto(doc: Photo): Observable<Photo>{
    return of(doc);
  }

  getInfoDocument(id: number): Observable<InfoDocument>{
    return of({} as InfoDocument);
  }

  getPhoto(id: number): Observable<Photo>{
    return of({} as Photo);
  }
}
