import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {KqHomeComponent} from "./kq-home/kq-home.component";
import {KqShoppingCartComponent} from "./kq-shopping-cart/kq-shopping-cart.component";
import {KqAllProductsComponent} from "./kq-all-products/kq-all-products.component";
import {KqUserLoginComponent} from './kq-user-auth/kq-user-login/kq-user-login.component';
import {KqUserRegComponent} from './kq-user-auth/kq-user-reg/kq-user-reg.component';

// TO DO : implement lazy loading
const appRoutes: Routes = [
  {
    path: '',
    component: KqHomeComponent
  },
  {
    path: 'shopping-cart',
    component: KqShoppingCartComponent
  },
  {
    path: 'all-products',
    component: KqAllProductsComponent
  },
  {
    path: 'user-login',
    component: KqUserLoginComponent
  },
  {
    path: 'user-register',
    component: KqUserRegComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
