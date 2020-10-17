import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPage} from './admin.page';



const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'edit/:produkId',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
