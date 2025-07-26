import { Component, OnInit } from '@angular/core';
import { HardcodedauthenticateService } from '../service/hardcodedauthenticate.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private authenticator: HardcodedauthenticateService){

  }
  ngOnInit(): void {
    this.authenticator.logut();
  }

}
