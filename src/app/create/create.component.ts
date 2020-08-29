import { Router } from '@angular/router';
import { EventService } from './../services/event.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createEventData = {
    Name:null,
    Venue:null,
    City:null,
    Address:null,
    EventDate:null
  }

  constructor(private _eventService: EventService, private _router: Router) { }

  ngOnInit(): void {
  }

  createEvent(){
    console.log(this.createEventData);
    this._eventService.createEvent(this.createEventData).subscribe(
      res=> {
        this._router.navigate(["/events"]);
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

}
