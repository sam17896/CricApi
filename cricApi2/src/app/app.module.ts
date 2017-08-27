import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AllMatchesComponent } from './all-matches/all-matches.component';
import { CricapiService } from './cricapi.service';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    AllMatchesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CricapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
