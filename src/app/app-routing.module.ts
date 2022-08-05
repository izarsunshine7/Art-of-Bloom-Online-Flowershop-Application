import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listing',
    loadChildren: () => import('./listing/listing.module').then( m => m.ListingPageModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./components/components.module').then( m => m.ComponentsPageModule)
  },
  {
    path: 'explore-container',
    loadChildren: () => import('./explore-container/explore-container.module').then( m => m.ExploreContainerPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/carts/carts.module').then( m => m.CartsPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
