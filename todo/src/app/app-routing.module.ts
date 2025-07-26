import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteguardserviceService } from './service/routeguardservice.service';
import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizquestionsComponent } from './quizquestions/quizquestions.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path:'',component: LoginComponent},
  { path:'login',component: LoginComponent},
  { path:'form',component: FormComponent},
  {path:'welcome',component:WelcomeComponent,canActivate:[RouteguardserviceService]},
  {path:'todos',component:ListToDosComponent,canActivate:[RouteguardserviceService]},
  {path:'getallquestions',component:QuestionsComponent,canActivate:[RouteguardserviceService]},
  {path:'startquiz',component:QuizComponent,canActivate:[RouteguardserviceService]},
  {path:'quizQuestions/:quizId',component:QuizquestionsComponent,canActivate:[RouteguardserviceService]},
  { path:'logout',component: LogoutComponent,canActivate:[RouteguardserviceService]},
  {path:'**',component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
