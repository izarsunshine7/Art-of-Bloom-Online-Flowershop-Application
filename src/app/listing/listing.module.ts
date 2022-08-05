import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListingPage } from './listing.page';

import { ListingPageRoutingModule } from './listing-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingPageRoutingModule
  ],
  declarations: [ListingPage]
})
export class ListingPageModule {}
