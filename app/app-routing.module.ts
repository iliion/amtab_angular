import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './components/app.component';
import { StopsComponent } from './components/stops.component';
import { BusesComponent } from './components/buses.component';
import { BusDetailComponent } from './components/bus-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/content', pathMatch: 'full' },
  { path: 'stops',  component: StopsComponent },
  { path: 'busDetail/:id', component: BusDetailComponent},
  { path: 'buses',  component: BusesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
