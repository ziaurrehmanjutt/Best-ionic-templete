import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginsPage } from './logins.page';

const routes: Routes = [
  {
    path: '',
    component: LoginsPage
  },
  {
    path: 'login1',
    loadChildren: () => import('./login1/login1.module').then( m => m.Login1PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginsPageRoutingModule {}
