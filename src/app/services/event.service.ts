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
    return this.http.get<any>(this._eventsUrl)
  }

  getSingleEvent(eventId){
    return this.http.get<any>(this._eventsUrl + "/" +eventId);
  }

  createEvent(event){
    return this.http.post<any>(this._eventsUrl, event)
  }

  removeEvent(event){
    return this.http.delete<any>(this._eventsUrl + "/" + event.eventId)
  }

  editEvent(event){
    return this.http.put<any>(this._eventsUrl + "/" + event.eventId, event);
  }
}
