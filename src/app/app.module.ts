import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KqHomeComponent} from './kq-home/kq-home.component';
//my modules
import {GeneralModule} from './general/general.module';
import {KqShoppingCartComponent} from './kq-shopping-cart/kq-shopping-cart.component';
import {GeneralService} from './general/general.service';
import {KqAllProductsComponent} from './kq-all-products/kq-all-products.component';
import {CustomHttpService} from "./http.service";

@NgModule({
  declarations: [
    AppComponent,
    KqHomeComponent,
    KqShoppingCartComponent,
    KqAllProductsComponent,
  ],
  imports: [
    BrowserModule,
    GeneralModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    CustomHttpService,
    GeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
