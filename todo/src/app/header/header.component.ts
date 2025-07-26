import { Component } from '@angular/core';
import { HardcodedauthenticateService } from '../service/hardcodedauthenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public authenticator: HardcodedauthenticateService){

  }

}
