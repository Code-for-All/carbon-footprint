import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, BASE_PATH } from '../api-module/index';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Authentication
import { AuthService } from './auth/auth.service';

// Components
import { TravelList } from './components/travel-list';

// Material Design
import { MaterialModule } from './material.module';
import { JourneyList } from './components/journey-list';

@NgModule({
  declarations: [
    AppComponent,
    TravelList,
    JourneyList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
