import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class CorrectAns {
  constructor(public correctAnswer: number) {}
}

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  getTitle(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/quiz/getTitle');
  }
  requestquestionsbyID(id: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/quiz/question/${id}`);
  }
  submitAnswers(id: string, requestBody: { id: number; answer: string }[])  {
    return this.http.post<CorrectAns>(`http://localhost:8080/quiz/submit/${id}`, requestBody);
}
}
