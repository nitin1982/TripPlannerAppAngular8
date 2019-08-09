import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/components/home/home.component';
import { SignupComponent } from '../security/components/signup/signup.component';

const appRoutes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
    data: { CompName: 'Home'}
  },
  {
    path: '',    
    component: HomeComponent,
    data: { CompName: 'Home'}
  },
  {
    path: 'Signup',
    component: SignupComponent
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
