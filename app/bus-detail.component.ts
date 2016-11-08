import { Component, Input } from '@angular/core';

import { Bus } from './bus';

@Component({
  selector: 'my-bus-detail',
  templateUrl: 'bus-detail.html'
})

export class BusDetailComponent {
	@Input()
	bus: Bus;
}
