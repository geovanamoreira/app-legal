import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SailorPage } from './sailor.page';

const routes: Routes = [
  {
    path: '',
    component: SailorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SailorPageRoutingModule {}
