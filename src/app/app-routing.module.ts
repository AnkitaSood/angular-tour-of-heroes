import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DoggoDetailComponent } from './doggo-details/doggo-detail.component';
import {DoggosComponent} from './doggos/doggos.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: DoggoDetailComponent },
  { path: 'doggos', component: DoggosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
