import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


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
      err => console.log(err)
    )
  }
  

}
