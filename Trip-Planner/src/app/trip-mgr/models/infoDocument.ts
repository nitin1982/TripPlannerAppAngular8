import { TripDocument } from './tripDocument';

export class InfoDocument implements TripDocument{
    id: number;    name: string;
    fileName: string;
    url: string;
    isPublic: boolean;
    documentType: string = "Other";    
}