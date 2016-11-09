import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './components/app.component';
import { BusDetailComponent } from './components/bus-detail.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, BusDetailComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
