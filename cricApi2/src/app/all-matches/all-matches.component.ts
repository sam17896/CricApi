import { Component, OnInit } from '@angular/core';
import {CricapiService} from '../cricapi.service';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit {

  matches
  constructor(private service:CricapiService) { }

  ngOnInit() {
    this.service.getAllMatches().subscribe(data=>{
      console.log(data)
      this.matches = data.mchdata.match;
      console.log(this.matches)
    })
  }

}
