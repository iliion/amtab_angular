import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Bus } from '../entities/bus';
import { BusService } from '../services/bus.service';

@Component({
  selector: 'my-bus-detail',
  templateUrl: 'app/views/bus-detail.html'
})

export class BusDetailComponent implements OnInit {

  bus: Bus;

  constructor(
    private busService: BusService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.busService.getBus(id).then(bus => this.bus = bus); 
    });
  }

  goBack(): void {
   this.location.back();
  }

}
