import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Constants } from "../../constants";
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _registerUrl = new Constants().baseUrl + "api/user";
  private _loginUrl = new Constants().baseUrl + "api/auth";

  constructor(private  http:HttpClient, private _router: Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return localStorage.getItem("accessToken") ? true : false;
  }

  getToken() {
    return localStorage.getItem("accessToken")
  }

  logoutUser(){
    localStorage.removeItem("accessToken");
    this._router.navigate(["/login"]);
  }
}
