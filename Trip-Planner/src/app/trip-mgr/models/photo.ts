import { TripDocument } from './tripDocument';


export class Photo implements TripDocument{
    id: number;    name: string;
    fileName: string;
    url: string;
    documentType: string = "Photo";
    isPublic: boolean;
}