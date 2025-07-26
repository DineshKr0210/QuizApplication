import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler){
    let username ='dinesh';
    let password = '1234';
    let basicAuthheaderString = 'Basic '+ window.btoa(username+':'+password);


    request = request.clone({
      setHeaders: {
        Authorization : basicAuthheaderString
      }
    })
    return next.handle(request);
  }
}
