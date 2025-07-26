import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  welcomeMessage = '';
  showQuiz = false;
  errorMsg = false;
  message: any = '';
  userName: any ='';

  receiveMessage(msg: string) {
    this.message = msg;
    this.errorMsg = true;
    this.showQuiz = false;
  }

  

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
     
  }
constructor(private router: Router){
}
onclick(){
this.router.navigate(['getallquestions']);

}
attendQuiz() {
  this.welcomeMessage = 'Select a Quiz: Message from Welcome';
  this.showQuiz = true;
  

  //this.router.navigate(['startquiz']);
}


}
