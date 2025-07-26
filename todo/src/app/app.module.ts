import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { QuestionsComponent } from './questions/questions.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { QuizComponent } from './quiz/quiz.component';
import { QuizquestionsComponent } from './quizquestions/quizquestions.component';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListToDosComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    QuestionsComponent,
    QuizComponent,
    QuizquestionsComponent,
    FormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
