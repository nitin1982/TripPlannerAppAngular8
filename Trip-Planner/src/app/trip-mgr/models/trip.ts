import { Stay } from './stay';
import { Photo } from './photo';
import { InfoDocument } from './infoDocument';
import { WebLink } from './webLink';
import { Address } from './address';

export interface Trip{
    id: number,
    name: string,
    detail: string,    
    startDate: Date,
    endDate: Date,    
    stay: Stay,
    photos: Photo[],
    otherDocs: InfoDocument[],
    webLinks: WebLink[],
    addresses:Address[],
    userId: number
}