import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export class resp{
  constructor(public message:string){
    
  }
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseUrl = 'http://localhost:8080/questions/allQuestions';

  constructor(private http: HttpClient) {}

  requestAllquestions(): Observable<any[]> { 

     let basicAuthheaderString = this.createbasicauthenticationheader();
    let headers = new HttpHeaders({
      Authorization: basicAuthheaderString 
    })
    return this.http.get<any[]>(this.baseUrl,{headers});
  }
 
  createbasicauthenticationheader(){
    let username ='dinesh';
    let password = '1234';
    let basicAuthheaderString = 'Basic '+ window.btoa(username+':'+password);
    return basicAuthheaderString
  }
  requestquestionsbycat(category:string): Observable<any[]> { // Explicitly set return type as an array
    return this.http.get<any[]>(`http://localhost:8080/questions/category/${category}`);
  }
  requestCreateQuiz(category: string, num: number, title: string){  
    return this.http.post<resp>(`http://localhost:8080/quiz/create`, null, {  
        params: {  
            category: category,  
            numQ: num.toString(), 
            title: title  
        }  
    });  
}
  
}