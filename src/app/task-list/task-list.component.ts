import { Component, OnInit } from '@angular/core';
import { TaskService } from "app/shared/task.service";
import { Task } from "app/shared/task.model";

@Component({
  selector: 'app-task-list',
  template: `
  <a routerLink="new" class="btn btn-danger">Add new task</a>
   <div class="col-md-3">
      <div class="well" *ngFor="let task of tasks">
          <app-task [task]="task"></app-task>
      </div>
    </div>
  `,
  styles: []
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(private taskSvc: TaskService) { }

  ngOnInit() {
    this.taskSvc.get()
      .subscribe((response) => this.tasks = response.json());
  }
}
