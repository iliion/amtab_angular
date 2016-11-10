import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }   from './components/app.component';
import { StopsComponent } from './components/stops.component';
import { BusesComponent } from './components/buses.component';
import { BusDetailComponent } from './components/bus-detail.component';
import { BusService }         from './services/bus.service';
import { StopService }         from './services/stop.service';

@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule
  ],
  declarations: 
  [ 
    AppComponent, 
    StopsComponent,
    BusesComponent,
    BusDetailComponent 
  ],
  providers:   
  [ BusService,
    StopService 
  ],
  bootstrap:  
  [ AppComponent ]
})

export class AppModule { }
