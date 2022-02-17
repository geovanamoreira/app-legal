import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SgkPage } from './sgk.page';

const routes: Routes = [
  {
    path: '',
    component: SgkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SgkPageRoutingModule {}
