import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionComponent } from './session.component';
import { RouterModule, Route } from '@angular/router';
import { routesSession } from './session-routing.module'
import { IonicModule } from '@ionic/angular';

const routes: Array<Route> = [
  {
    path: '',
    component: SessionComponent,
    children: routesSession
  }
]

@NgModule({
  declarations: [
    SessionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule
  ]
})
export class SessionModule { }
