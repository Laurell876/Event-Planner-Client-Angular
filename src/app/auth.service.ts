import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Constants } from "../constants";
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _registerUrl = new Constants().baseUrl + "api/user";
  private _loginUrl = new Constants().baseUrl + "api/auth";

  constructor(private  http:HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user);
  }
}
