import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from "@angular/platform-browser";
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Carbon footprint';
  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public auth: AuthService) {
    iconRegistry.addSvgIconSetInNamespace("myicons", sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/icons.svg'));
  }
  ngOnInit() {
    this.auth.localAuthSetup();
    this.auth.handleAuthCallback();
  }
}
