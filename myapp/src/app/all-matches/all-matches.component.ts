import { Component, OnInit } from '@angular/core';
import {CricServiceService} from '../cric-service.service';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit {

  matches;
  constructor(private service:CricServiceService) {

  }

  ngOnInit() {
    this.service.getAllMatch().subscribe(res=>{
      this.matches = res;
    }
    )
  }

}
