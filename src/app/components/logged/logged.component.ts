import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged',
  template: `
    <ion-router-outlet></ion-router-outlet>
    <app-menu></app-menu>
  `,
})
export class LoggedComponent { }
