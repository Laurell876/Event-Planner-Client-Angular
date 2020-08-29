import { Router } from '@angular/router';
import { EventService } from './../services/event.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = [];
  constructor(private _eventsService: EventService, private _router: Router) { }

 ngOnInit(): void {
    this._eventsService.getEvents()
    .subscribe(
      res=> this.events = res,
      error => {
        if(error instanceof HttpErrorResponse) {
          if(error.status === 401) {
            this._router.navigate(["/login"]);
          }
        }
      }
    )
  }

  removeEvent(event){
    this._eventsService.removeEvent(event)
    .subscribe(
      res=> {
        window.location.reload(false); 
      },
      error => {
        if(error instanceof HttpErrorResponse) {
          if(error.status === 401) {
            this._router.navigate(["/login"]);
          }
        }
      }
    )
  }

  goToEditEvent(event){
    const eventId = event.eventId ? event.eventId : null;
    this._router.navigate(["/edit", { id: eventId }])
  }



}
