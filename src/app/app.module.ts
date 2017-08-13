import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from "app/shared/task.service";
import { Time } from "app/shared/time.pipe";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, TaskComponent, TaskListComponent, Time, HomeComponent, AboutComponent, FooterComponent, HeaderComponent],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule { }