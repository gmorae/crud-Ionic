import { Route } from '@angular/router';
import { ProductResolve } from 'src/app/resolve/getProducts.resolve';


export const privateRoutes: Array<Route> = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('../../pages/home/home.module').then(m => m.HomePageModule),
    resolve: {
      devs: ProductResolve
    }
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
  {
    path: 'config',
    loadChildren: () => import('../../pages/config/config.module').then(m => m.ConfigModule)
  }
];