import { Component } from '@angular/core';
import { JourneyService, Journey } from '../api-module/index';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'footprint';
  journeys: Journey[];
  constructor(journeyService: JourneyService){
    journeyService.journeysGet().subscribe(c => {
      this.journeys = c;
    });
  }
}
