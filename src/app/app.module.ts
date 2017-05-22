import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent, TaskComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }