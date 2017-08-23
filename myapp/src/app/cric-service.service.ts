import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {parseString} from 'xml2js'
import 'rxjs'

@Injectable()
export class CricServiceService {

  baseUrl : string;
  parser;

  constructor(private http : Http) {
    this.baseUrl = "http://localhost:1337/synd.cricbuzz.com/j2me/1.0/livematches.xml";
  }

  getAllMatch(){
    return this.http.get(this.baseUrl)
            .map(res=>{
              parseString(res, function (err, result) {
                console.dir(JSON.stringify(result));
            });
              
        })
    }

}
