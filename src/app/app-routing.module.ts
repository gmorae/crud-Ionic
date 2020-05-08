import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'session',
    pathMatch: 'full'
  },
  {
    path: 'logged',
    loadChildren: () => import('./components/logged/logged.module').then(m => m.LoggedModule)
  },
  {
    path: 'session',
    loadChildren: () => import('./components/session/session.module').then(m => m.SessionModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
