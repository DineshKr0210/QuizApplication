import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedauthenticateService {
  constructor() {}

  authenticate(userName: string, password: string): boolean {
    if (userName === 'Dinesh Kumar' && password === 'dummy') {
      sessionStorage.setItem('authenticateUser', userName);
      localStorage.setItem('userName',userName);
      localStorage.setItem('techStack','java');

      return true;
    }else if (userName === 'Ruthra' && password === 'dummy') {
      sessionStorage.setItem('authenticateUser', userName);
      localStorage.setItem('userName',userName);
      localStorage.setItem('techStack','python');

      return true;
    }
    return false;
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }
  logut(){
    sessionStorage.removeItem('authenticateUser');
     localStorage.removeItem('userName');
     localStorage.removeItem('techStack');
  }
}
