import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `<h3>{{task.name}}</h3>`
})

export class TaskComponent {

@Input() task:any;

}
