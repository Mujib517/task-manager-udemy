import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-task',
  template: `
  <div>
    <h3>{{task.name | uppercase}}</h3>
    <div>{{task.category}}</div>
    <div>{{task.created | date: 'MM-dd-yyyy'}}</div>
    <hr/>
    <div>{{task.created | time}}</div>
    Completed? <input type="checkbox" [(ngModel)]="task.completed"/>
  </div>
  `
})

export class TaskComponent {

  @Input() task: any;
}
