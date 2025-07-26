import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthenticateService } from '../service/hardcodedauthenticate.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router,private hardcodedauthenticateService: HardcodedauthenticateService
  ){
    
  }
userName = 'Dinesh Kumar';
password = '';
errMsg="Invalid Credentials";
invalid = false;

handle(){
  if(this.hardcodedauthenticateService.authenticate(this.userName,this.password)){
    this.router.navigate(['welcome']);
    this.invalid=false;
  }else{
    this.invalid=true;

  }

}
}


