import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SgkPageRoutingModule } from './sgk-routing.module';

import { SgkPage } from './sgk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SgkPageRoutingModule
  ],
  declarations: [SgkPage]
})
export class SgkPageModule {}
