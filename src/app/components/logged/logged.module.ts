import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { LoggedComponent } from './logged.component';
import { privateRoutes } from './logged-routing.module'
import { MenuComponent } from '../menu/menu.component';
import { IonicModule } from '@ionic/angular';

const routes: Array<Route> = [
  {
    path: '',
    component: LoggedComponent,
    children: privateRoutes
  }
]

@NgModule({
  declarations: [
    LoggedComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule
  ]
})
export class LoggedModule { }
