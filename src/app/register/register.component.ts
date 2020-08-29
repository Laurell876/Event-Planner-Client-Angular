import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NullTemplateVisitor } from '@angular/compiler';

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

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    
  }

}