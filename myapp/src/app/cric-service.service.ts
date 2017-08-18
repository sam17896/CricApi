import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs'

@Injectable()
export class CricServiceService {

  baseUrl : String;

  constructor(private http : Http) {
    this.baseUrl = "http://cricscore-api.appspot.com/";
  }

  getAllMatch(){
    return this.http.get(this.baseUrl + 'csa')
            .map(res=>res.json);
  }

}
