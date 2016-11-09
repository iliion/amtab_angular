import { Injectable } from '@angular/core';

import { Stop } from '../entities/stop';
import { STOPS } from '../mock-stops';

@Injectable()
export class StopService {
	getStops(): Promise<Stop[]> {
      return Promise.resolve(STOPS);
	}
}