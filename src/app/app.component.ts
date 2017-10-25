import { RouterLink } from '@angular/router/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-site-header></app-site-header>
    <front-carousel></front-carousel>
    <h1> Angular CI Example! </h1>
    <nav>
      <a routerLink="/red">RED</a>
      <a routerLink="/blue">BLUE</a>
      <a routerLink="/green">GREEN</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
