import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CricServiceService} from '../cric-service.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  id
  match
  constructor(private route: ActivatedRoute,
              private service : CricServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['id']){
        this.id = params['id'];
      }
      var $this = this
      

      setInterval(function(){
        $this.service.getMatchScore($this.id).subscribe(data =>{
          console.log(data)
          $this.match = data[0]
        })
      },10000)



      


    });
  }

}
