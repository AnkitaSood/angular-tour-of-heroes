import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `
    <header><h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active" class="nav-link">Dashboard</a>
      <a routerLink="/doggos" routerLinkActive="active" class="nav-link">Doggos</a>
    </nav>
    </header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Doggos';
}
