import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { BusDetailComponent } from './bus-detail.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, BusDetailComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
