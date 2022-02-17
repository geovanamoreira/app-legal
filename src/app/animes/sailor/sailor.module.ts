import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SailorPageRoutingModule } from './sailor-routing.module';

import { SailorPage } from './sailor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SailorPageRoutingModule
  ],
  declarations: [SailorPage]
})
export class SailorPageModule {}
