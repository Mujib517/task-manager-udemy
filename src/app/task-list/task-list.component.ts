import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

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

  constructor(private http: Http) {

    http.get('http://localhost:3000/tasks')
      .subscribe((response) => this.tasks = response.json());
  }

  tasks: any;


}
