import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `
    <header>
      <div class="app-logo">
      <h2>Tour of</h2>
      <h1>Doggos!</h1>
      </div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active" class="nav-link">Dashboard</a>
      <a routerLink="/doggos" routerLinkActive="active" class="nav-link">Doggos</a>
    </nav>
    </header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
