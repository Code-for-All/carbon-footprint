import { Component } from '@angular/core';
import { Journey, JourneyService } from 'src/api-module';

@Component({
  selector: 'journey-list',
  styleUrls: ['journey-list.scss'],
  templateUrl: 'journey-list.html',
})
export class JourneyList {
  journeys: Journey[];
  constructor(private journeyService: JourneyService) {
    this.journeyService.journeysGet().subscribe(c => {
      this.journeys = c;
    });
  }
}
