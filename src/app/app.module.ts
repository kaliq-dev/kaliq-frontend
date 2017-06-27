import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {KqHomeComponent} from './kq-home/kq-home.component';

//my modules
import {GeneralModule} from './general/general.module';

@NgModule({
  declarations: [
    AppComponent,
    KqHomeComponent
  ],
  imports: [
    BrowserModule,
    GeneralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
