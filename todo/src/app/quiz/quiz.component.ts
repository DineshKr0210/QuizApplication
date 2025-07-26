import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizService } from '../service/data/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input() message!: string;
  @Output() messageEvent = new EventEmitter<string>();

  questions: any[] = [];  
  titles: any[] = []; 
  id:string='';
  selectedTitle: string = ''; 
  errorMessage: string = ''; 
  techStack: string = '';

  constructor(private service: QuizService, private router: Router){

  }
  ngOnInit(): void {
  this.techStack = localStorage.getItem('techStack') ?? '';
  this.getTitles();
  }
  getTitles() {
    this.service.getTitle().subscribe(response => {
      this.titles = response;  
    })
  }
  
  startQuiz() {
     const selectedQuiz = this.titles.find(q => q.id == this.id);
     this.selectedTitle = selectedQuiz ? selectedQuiz.title : 'Unknown';

     if(this.selectedTitle.toLowerCase().includes(this.techStack)){
     this.router.navigate(['quizQuestions',this.id]);
     }
    else{

      this.errorMessage = "Only " +this.techStack.toUpperCase() +" Questions can be selected for your role"
      this.messageEvent.emit(this.errorMessage);
    }
    }

}
