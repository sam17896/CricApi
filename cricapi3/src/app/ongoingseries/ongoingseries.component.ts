import { Component, OnInit } from '@angular/core';
import {CricService} from '../cric.service';

@Component({
  selector: 'app-ongoingseries',
  templateUrl: './ongoingseries.component.html',
  styleUrls: ['./ongoingseries.component.css']
})
export class OngoingseriesComponent implements OnInit {

  
  series;
  constructor(private service : CricService) { }

  ngOnInit() {
    this.service.getOnGoing().subscribe(data=>{this.series=data.query.results.Series;console.log(this.series)})
  }


}
