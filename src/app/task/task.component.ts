import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
  <div>
    <h3>{{task.name}}</h3>
    <div>{{task.category}}</div>
    <div>{{task.created}}</div>
    Completed? <input type="checkbox" [(ngModel)]="task.completed"/>
  </div>
  `
})

export class TaskComponent {

  @Input() task: any;

}
