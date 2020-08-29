import { EventService } from './../services/event.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  eventIdToBeFetched: string;

  eventData = {
    eventId: null,
    name:null,
    venue:null,
    city:null,
    address:null,
    eventDate:null
  }

  constructor(private route:ActivatedRoute, private _eventService: EventService, private _router: Router) { }


  ngOnInit() {

    this.eventIdToBeFetched = this.route.snapshot.paramMap.get("id");

    this._eventService.getSingleEvent(this.eventIdToBeFetched)
    .subscribe(
      res=> {
        this.eventData = res
        console.log(this.eventData)

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

  editEvent(){
    console.log(this.eventData)
    this._eventService.editEvent(this.eventData).subscribe(
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
