import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedauthenticateService } from './hardcodedauthenticate.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardserviceService implements CanActivate {

  constructor(private authenticator: HardcodedauthenticateService,private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authenticator.isUserLoggedIn())
    return true;

    this.router.navigate(['login']);

    return false;
  }
}
