import { Trip } from './trip';

export const allTrips: Trip[] = [
    {
        id: 101,
        name: 'Road Trip to East Coast',
        detail: 'Road Trip to East Coast in next summer.',
        startDate: new Date(2019,7,8),
        endDate:  new Date(2019,7,9),
        webLinks:[{
            id: 1010,
            name: 'City Tourism Website',
            link: 'www.tripadvisor.com/boone'
        }],
        otherDocs: [],
        photos: [],
        stay: {
            id: 1011,
            name: 'ABC Resort',
            detail: 'ABC R',            
        },
        addresses: [{
            id: 1012,
            name: 'Hotel Address',
            address1: '2515 St. Jone',
            address2: '',
            city: 'Effigham',
            state: 'IL',
            zip: '251545'        
        }],
        userId: 1598
    }
];