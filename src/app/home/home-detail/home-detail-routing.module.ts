import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeDetailPage} from './home-detail.page';



const routes: Routes = [
  {
    path: '',
    component: HomeDetailPage,
  },
  // {
  //   path: 'produkId',
  //   loadChildren: () => import('./home-detail.module'). then ( m => m.HomeDetailPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDetailPageRoutingModule {}
