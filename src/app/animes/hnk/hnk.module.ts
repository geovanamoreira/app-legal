import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HnkPageRoutingModule } from './hnk-routing.module';

import { HnkPage } from './hnk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HnkPageRoutingModule
  ],
  declarations: [HnkPage]
})
export class HnkPageModule {}
