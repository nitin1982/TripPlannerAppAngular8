import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityModule } from '../security/security.module';
import { HomeComponent } from './components/home/home.component';

import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [HomeComponent],
    imports: [ CommonModule, SecurityModule, FormsModule],
    exports: [],
    providers: [],
})
export class HomeModule {}