import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  template: `
   <div class="col-md-3">
      <div class="well" *ngFor="let task of tasks">
          <app-task [task]="task"></app-task>
      </div>
    </div>
  `,
  styles: []
})
export class TaskListComponent {

  tasks: any = [{
    name:'Buy Groceries'
  },
  {
    name:'Recharge Mobile'
  },
  {
    name:'Pay internet bill'
  }];


}
