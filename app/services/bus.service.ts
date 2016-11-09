import { Injectable } from '@angular/core';

import { Bus } from '../entities/bus';
import { BUSES } from '../mock-buses';

@Injectable()
export class BusService {
	getBuses(): Promise<Bus[]> {
      return Promise.resolve(BUSES);
	}
}