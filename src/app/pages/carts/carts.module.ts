import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartsPageRoutingModule } from './carts-routing.module';

import { CartPage } from './carts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartsPageRoutingModule
  ],
  declarations: [CartPage]
})
export class CartsPageModule {}
