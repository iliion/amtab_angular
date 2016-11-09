import { Component, OnInit } from '@angular/core';

import { Bus } from '../entities/bus';
import { BusService } from '../services/bus.service';

@Component({
  selector: 'my-buses',
  templateUrl: 'app/views/buses.html',
})

export class BusesComponent implements OnInit {
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
