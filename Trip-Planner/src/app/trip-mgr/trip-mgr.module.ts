import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { TripMgrLandingComponent } from './components/trip-mgr-landing/trip-mgr-landing.component';
import { SaveTripComponent } from './components/save-trip/save-trip.component';
import { SaveStayComponent } from './components/save-stay/save-stay.component';
import { FormsModule } from '@angular/forms';
import { SaveDocumentComponent } from './components/save-document/save-document.component';
import { ViewDocumentsComponent } from './components/view-documents/view-documents.component';
import { ViewAddressesComponent } from './components/view-addresses/view-addresses.component';
import { SaveAddressComponent } from './components/save-address/save-address.component';
import { ViewLinksComponent } from './components/view-links/view-links.component';
import { SaveLinkComponent } from './components/save-link/save-link.component';

const tripMgrRoots: Routes = [
    {
        path: 'Trips',
        data: { CompName: 'Home'},
        component: TripMgrLandingComponent,
        children:[            
            {
                path:'',
                component: TripListComponent,
                data: { CompName: 'Home'}
            },
            {
                path:':id/Edit',
                component: SaveTripComponent,
                data: { CompName: 'Home'}
            },
            {
                path:':tripId/Stay',
                component: SaveStayComponent,
                data: { CompName: 'Home'}
            },
            {
                path:':tripId/Addresses',
                component: ViewAddressesComponent,
                data: { CompName: 'Home'}
            },
            {
                path:':tripId/Addresses/:addressId/Edit',
                component: SaveAddressComponent,
                data: { CompName: 'Home'}
            },
            {
                path:':tripId/Documents',
                component: ViewDocumentsComponent,
                data: { CompName: 'Home'}
            },
            {
                path:':tripId/Documents/Add',
                component: SaveDocumentComponent,
                data: { CompName: 'Home'}
            },
            {
                path:':tripId/Links',
                component: ViewLinksComponent,
                data: { CompName: 'Home'}
            },
            {
                path:':tripId/Links/:linkId/Edit',
                component: SaveLinkComponent,
                data: { CompName: 'Home'}
            }
        ]
    }
];
@NgModule({
    declarations: [TripListComponent, TripMgrLandingComponent, SaveTripComponent, SaveStayComponent, SaveDocumentComponent, ViewDocumentsComponent, ViewAddressesComponent, SaveAddressComponent, ViewLinksComponent, SaveLinkComponent],
    imports: [ CommonModule, RouterModule.forChild(tripMgrRoots), FormsModule ],
    exports: [],
    providers: [],
})
export class TripMgrModule {
    
}