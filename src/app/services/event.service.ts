import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/constants';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = new Constants().baseUrl + "api/events";
  
  constructor(private http: HttpClient) { }

  getEvents() {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': "bearer " + ""
    })
    return this.http.get<any>(this._eventsUrl)
  }

  createEvent(event){
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': "bearer " + ""
    })
    return this.http.post<any>(this._eventsUrl, event)

  }
}
