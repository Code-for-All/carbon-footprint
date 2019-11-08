import { Component } from '@angular/core';
import { JourneyService, Journey } from '../api-module/index';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Carbon footprint';
  journeys: Journey[];
  constructor(journeyService: JourneyService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
    iconRegistry.addSvgIconSetInNamespace("myicons", sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/icons.svg'));
    journeyService.journeysGet().subscribe(c => {
      this.journeys = c;
    });
  }

  randomColor (): string {
    return "rgb(" 
      + Math.floor(Math.random() * 255) + "," 
      + Math.floor(Math.random() * 255) + ","  
      + Math.floor(Math.random() * 255) + ")";  
  }
}
