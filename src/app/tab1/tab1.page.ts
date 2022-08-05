import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { CartsPage } from '../pages/carts/carts.page';
import { CartPage } from '../services/cart/cart.page';
import { FlowersPage } from '../services/flowers/flowers.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // set app banner slides
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    }
  };

  bannerImages: any = [];
  flowers: any = [];

  constructor(
    public flowerService : FlowersPage,
    public routerOutlet : IonRouterOutlet,
    public modalCtrl : ModalController,
    public cart : CartPage,
    private router: Router
  ) {
    this.bannerImages = this.flowerService.bannerImages;
    this.flowers = this.flowerService.flowers;
  }

  async addToCartModal(item) {
    console.log('item_id :>> ', item);
    let isAdded = this.cart.isAddedToCart(item.id);

    if ( !isAdded ) {
      this.cart.placeItem(item);
      const modal = await this.modalCtrl.create({
        component: CartsPage,
        cssClass: 'carts-modal',
        presentingElement: this.routerOutlet.nativeEl
      });
  
      await modal.present();
      
      await modal.onWillDismiss().then((result) => {
        console.log('result :>> ', result);
      }).catch((err) => {
        console.log('err :>> ', err);
      });

    } else {
      this.router.navigate(['/tabs/tab2']);
    }
    
  }

}
