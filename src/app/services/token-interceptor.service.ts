import { AuthService } from './auth.service';
import { Injectable, Injector, Inject } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let authService = this.injector.get(AuthService);
    let tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: "Bearer " +  authService.getToken()
      }
    })
    return next.handle(tokenizedRequest)
  }
}
