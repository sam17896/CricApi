import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs'

@Injectable()
export class CricServiceService {

  baseUrl : string;
  
  constructor(private http : Http) {
   // this.baseUrl = "http://localhost:1337/synd.cricbuzz.com/j2me/1.0/livematches.xml";
   this.baseUrl = "http://localhost:1337/cricscore-api.appspot.com/csa";
  }

  getAllMatch(){
    return this.http.get(this.baseUrl)
            .map(res=>res.json());
    }

    getMatchScore(id){
      return  this.http.get(this.baseUrl + '?id=' + id)
              .map(res=>res.json())
    }

}
