import { Component, OnInit } from '@angular/core';
import { Task } from "app/shared/task.model";
import { TaskService } from "app/shared/task.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styles: []
})
export class NewTaskComponent {

  task: Task;

  constructor(private taskSvc: TaskService,private router:Router) {
    this.task = new Task();
    
    //generate a random number betweeen 1 and 100
    this.task.id=Math.floor((Math.random() * 100) + 1);
  }

  onSave() {
    this.taskSvc.save(this.task)
      .subscribe((response) => this.router.navigate(['/tasks']));
  }

}
