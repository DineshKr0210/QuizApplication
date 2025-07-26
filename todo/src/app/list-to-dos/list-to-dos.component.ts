import { Component } from '@angular/core';

export class ToDos{
constructor(public id: number,
  public description: String,
  public done: Boolean,
  public date: Date
){

}
}

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent {
//      todos=[{id:1,description:'Learn Microservices'},
//   {id: 2,description:'Learn Microservices'},
//   {id: 3,description:'Learn Microservices'}
// ]
todos=[new ToDos(1,'Learn Microservices',false,new Date()),
  new ToDos(2,'Learn to Dance',false,new Date()),
  new ToDos(3,'Learn Microservices',true,new Date()),
  new ToDos(4,'Learn Microservices',false,new Date())
]
}
