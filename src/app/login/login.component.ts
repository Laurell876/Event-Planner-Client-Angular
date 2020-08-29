import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    firstName:null,
    lastName:null,
    userName:null,
    email:null,
    password:null
  }


  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {}
  
  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res =>  {
        localStorage.setItem("accessToken", res.accessToken);
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
