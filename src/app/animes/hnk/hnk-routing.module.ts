import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HnkPage } from './hnk.page';

const routes: Routes = [
  {
    path: '',
    component: HnkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HnkPageRoutingModule {}
