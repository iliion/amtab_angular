import { Component } from '@angular/core';

import { Bus } from './bus';


const BUSES: Bus[] = [
  { id: 1, name: 'Linea 1' },
  { id: 2, name: 'Linea 2' },
  { id: 3, name: 'Linea 3' },
  { id: 4, name: 'Linea 4' },
  { id: 5, name: 'Linea 5' },
  { id: 6, name: 'Linea 6' },
  { id: 7, name: 'Linea 7' },
  { id: 8, name: 'Linea 8' },
  { id: 9, name: 'Linea 9' },
  { id: 10, name: 'Linea 10' }
];

@Component({
  selector: 'my-app',
  templateUrl: 'content.html'
})

export class AppComponent {
  title = 'AMTAB';
  buses = BUSES;
  selectedBus: Bus;

  onSelect(bus:Bus):void {
  	this.selectedBus = bus;
  }
}
