import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'tasks', component: TaskListComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)],
    declarations: [AppComponent, TaskComponent, TaskListComponent, Time, HomeComponent, AboutComponent, FooterComponent, HeaderComponent],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule { }