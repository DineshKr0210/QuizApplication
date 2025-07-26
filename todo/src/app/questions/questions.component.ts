import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionService } from '../service/data/question.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

@Input() message!: string;

quizCreated:boolean= false;

  questions: any[] = []; 
  groupedQuestions: { [key: string]: any[] } = {}; 
  selectedCategory: string = ''; 
  categories: string[] = []; 
  continue: boolean = false;
  question: boolean = true;
  numQuestions: number=0;
  quizTitle: string = '';
  outresponse:any='';


  constructor(private service: QuestionService,private route: Router) {}

  ngOnInit(): void {
    this.fetchQuestions();
  }

  fetchQuestions(): void {
    this.service.requestAllquestions().subscribe(response => {
      this.questions = response;  
      this.extractCategoriesNaive(); 
      this.groupQuestionsByCategory();  
    });
  }

  fetchQuestionsByCategory(): void {
    if (this.selectedCategory) {
      this.service.requestquestionsbycat(this.selectedCategory).subscribe(response => {
        this.questions = response;  
        this.groupQuestionsByCategory();
      });
    }
  }

  filter(): void {
    if (this.selectedCategory) {
      this.fetchQuestionsByCategory();
    } else {
      this.fetchQuestions(); 
    }
  }

  extractCategoriesNaive(): void {
    let categoryList: string[] = []; 

    this.questions.forEach((question) => {
      if (categoryList.indexOf(question.category) === -1) {
        categoryList.push(question.category);
      }
    });

    this.categories = categoryList;
  }

  groupQuestionsByCategory(): void {
    this.groupedQuestions = {}; 

    this.questions.forEach((question) => {
      if (!this.groupedQuestions[question.category]) {
        this.groupedQuestions[question.category] = [];
      }
      this.groupedQuestions[question.category].push(question);
    });
  }
  continuebtn(){
    this.continue = true;
    this.question = false;
  }
  async createQuiz() {
    try {
        const response = await firstValueFrom(this.service.requestCreateQuiz(this.selectedCategory, this.numQuestions, this.quizTitle));
        
        if (response.message === "Success") {
            this.quizCreated = true;
        }
        
    } catch (error) {
        console.error("Quiz creation failed:", error);
    }
}
quizDone() {
  this.quizCreated = false;
  this.route.navigate(['welcome']);

}
 
}