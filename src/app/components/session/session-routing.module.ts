import { Route } from '@angular/router';

export const routesSession: Array<Route> = [
  {
    path:'',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: () => import('../../pages/login/login.module').then(m => m.LoginModule)
  }
];