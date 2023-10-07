import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralPage } from './general.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralPage
  },
  {
    path: 'welcome1',
    loadChildren: () => import('./welcome/welcome1/welcome1.module').then( m => m.Welcome1PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralPageRoutingModule {}
