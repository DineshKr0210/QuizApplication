import { Component, OnInit } from '@angular/core';
import { QuizService } from '../service/data/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-quizquestions',
  templateUrl: './quizquestions.component.html',
  styleUrls: ['./quizquestions.component.css']
})
export class QuizquestionsComponent implements OnInit {


  questions: any[] = [];  
  id: string = '';
  selectedAnswers: { id: number, answer: string }[] = [];
  correctAnswers:number =0;
  quizSubmitted: boolean=false;

  constructor(private service: QuizService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('quizId') || '';
    this.getQuestions();
  }

  getQuestions() {
    this.service.requestquestionsbyID(this.id).subscribe(response => {
      this.questions = response;  
      this.selectedAnswers = this.questions.map(q => ({ id: q.id, answer: '' }));
    });
  }

  selectAnswer(questionId: number, answer: string) {
    const index = this.selectedAnswers.findIndex(q => q.id === questionId);
    if (index !== -1) {
      this.selectedAnswers[index].answer = answer;
    }
  }

  async submitQuiz() {
    const requestBody = this.selectedAnswers.filter(q => q.answer !== ''); // Only send answered questions

    console.log('Request Body:', requestBody); 

    try {
      const response = await firstValueFrom(this.service.submitAnswers(this.id,requestBody));      
      
      if (response.correctAnswer!==null) {
          this.correctAnswers = response.correctAnswer;
          this.quizSubmitted = true;
      }
      console.log(this.correctAnswers);
  } catch (error) {
      console.error("Quiz creation failed:", error);
  }
   
}
}