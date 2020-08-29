import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NullTemplateVisitor } from '@angular/compiler';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    firstName:null,
    lastName:null,
    userName:null,
    email:null,
    password:null
  }

  constructor(
    private _auth: AuthService,
    private _router: Router
    ) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res =>  {
        localStorage.setItem("accessToken", res.accessToken);
        this._router.navigate(["/events"]);
      },
      err => console.log(err)
    )
  }

}
