import { EventService } from './../services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = [];
  constructor(private _eventsService: EventService) { }

  ngOnInit(): void {
    this._eventsService.getEvents()
    .subscribe(
      res=> this.events = res,
      error => console.log(error)
    )
  }



}
