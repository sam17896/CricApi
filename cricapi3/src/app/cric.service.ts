import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class CricService {

  constructor(private http:Http) {

  }

  public getSeries(){
    return this.http.get('http://localhost:1338/livescore/series').map(res=>res.json());
  }

  public getOnGoing(){
    return this.http.get('http://localhost:1338/livescore/ongoingseries').map(res=>res.json());  
  }

}
