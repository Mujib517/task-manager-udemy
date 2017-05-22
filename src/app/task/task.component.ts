import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `<h1>{{task.name}}</h1>`
})

export class TaskComponent {

@Input() task:any;

}
