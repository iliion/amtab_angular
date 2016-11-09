import { Component, Input } from '@angular/core';

import { Bus } from '../entities/bus';

@Component({
  selector: 'my-bus-detail',
  templateUrl: 'app/views/bus-detail.html'
})

export class BusDetailComponent {
	@Input()
	bus: Bus;
}
