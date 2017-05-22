import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `

<input type="text" [(ngModel)]="title"/>

    {{1+2}}
    <h1>{{'Chandler'+'Bing'}}</h1>
    <h1 [style.border]="applyStyle?'1px solid black':'none'">{{title}} </h1>
    <h1>{{getTitle()}}</h1>
    <button [class.visible]="applyCls"
     (click)="onClick()"
     [disabled]="disableBtn">Click Me</button>
  `,
  styles: []
})

export class TaskComponent {

  title: string = "Buy Groceries";
  disableBtn:boolean=false;
  applyCls:boolean=false;
  applyStyle:boolean=false;

  onClick(){
    alert('hello ');
  }

  getTitle(){
    return this.title;
  }

}
