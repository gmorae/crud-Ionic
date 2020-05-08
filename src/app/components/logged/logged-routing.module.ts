import { Route } from '@angular/router';


export const privateRoutes: Array<Route> = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('../../pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('../../pages/create/create.module').then(m => m.CreateModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('../../pages/create/create.module').then(m => m.CreateModule)
  },
  {
    path: 'information',
    loadChildren: () => import('../../pages/information/information.module').then(m => m.InformationModule)
  },
];