import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs'

@Injectable()
export class CricapiService {

  constructor(private http : Http) { }

  getAllMatches(){
    return this.http.get('http://localhost:1338/livescore/list').map(res=>{
      console.log(res);
      return res.json()
    }
    )
  }

}
