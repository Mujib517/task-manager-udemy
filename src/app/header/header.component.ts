import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<header>
          <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" routerLink='/'>Task Manager</a>
          </div>
          <ul class="nav navbar-nav">
            <li><a routerLink='/'>Home</a></li>
            <li><a routerLink='/about'>About</a></li>
            <li><a routerLink='/tasks'>Tasks</a></li>
          </ul>
        </div>
      </nav>
  </header>`
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
