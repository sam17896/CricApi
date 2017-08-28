import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { AllSeriesComponent } from './all-series/all-series.component';
import {CricService} from './cric.service';
import {routing} from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { OngoingseriesComponent } from './ongoingseries/ongoingseries.component'

@NgModule({
  declarations: [
    AppComponent,
    AllSeriesComponent,
    NavbarComponent,
    OngoingseriesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [CricService],
  bootstrap: [AppComponent]
})
export class AppModule { }
