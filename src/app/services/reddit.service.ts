import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Awww, Data, Child, RealStuff } from '../interfaces/awww';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  apiURL = 'https://www.reddit.com';

  constructor(private http:HttpClient) { }

  getAwww(){
    return this.http.get<Awww>(`${this.apiURL}/r/aww/.json`);
  }



}
