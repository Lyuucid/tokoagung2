import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: ':produkId',
    loadChildren: () => import('./home-detail/home-detail.module').then( m => m.HomeDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
