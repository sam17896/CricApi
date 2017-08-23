import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AllMatchesComponent } from './all-matches/all-matches.component';

import {CricServiceService} from './cric-service.service';
import { MatchComponent } from './match/match.component';
import {routing} from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AllMatchesComponent,
    MatchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [CricServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
