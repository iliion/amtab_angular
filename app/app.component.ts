import { Component, OnInit } from '@angular/core';

import { Bus } from './bus';
import { BusService } from './bus.service';

@Component({
  selector: 'my-app',
  templateUrl: 'content.html',
  providers:[BusService]
})

export class AppComponent implements OnInit {
  title = 'AMTAB';
  buses: Bus[];
  selectedBus: Bus;

  constructor(private busService: BusService) {}

  getBuses(): void {
    this.busService.getBuses().then(buses => this.buses = buses);
  }

  ngOnInit(): void {
    this.getBuses();
  }

  onSelect(bus:Bus):void {
  	this.selectedBus = bus;
  }
}
