import { Component, OnInit } from '@angular/core';
import {CricService} from '../cric.service';

@Component({
  selector: 'app-all-series',
  templateUrl: './all-series.component.html',
  styleUrls: ['./all-series.component.css']
})
export class AllSeriesComponent implements OnInit {

  series;
  constructor(private service : CricService) { }

  ngOnInit() {
    this.service.getSeries().subscribe(data=>{this.series=data.query.results.Series;console.log(this.series)})
  }

}
