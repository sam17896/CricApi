import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { AllMatchesComponent } from './all-matches/all-matches.component';

import {CricServiceService} from './cric-service.service';


@NgModule({
  declarations: [
    AppComponent,
    AllMatchesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [CricServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
