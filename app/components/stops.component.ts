import { Component } from '@angular/core';

import { Stop } from '../entities/stop';
import { StopService } from '../services/stop.service';

@Component({
  selector: 'my-stops',
  templateUrl: 'app/views/stops.html'
})

export class StopsComponent implements OnInit {
  stops: Stop[];
  // selectedStop: Stop;

  constructor(private stopService: StopService) {}

  getStops(): void {
  	this.stopService.getStops().then(stops => this.stops = stops);
  }

  ngOnInit(): void {
  	this.getStops();
  }

  // onSelect(stop:Stop):void {
  // 	this.selectedStop = stop;
  // }
}
