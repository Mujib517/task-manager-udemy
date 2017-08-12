import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from "app/shared/task.service";
import { Time } from "app/shared/time.pipe";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, TaskComponent, TaskListComponent, Time],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule { }