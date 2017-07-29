import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AutoCompleteModule} from 'primeng/primeng';
import {KqGlobalSearchComponent} from './kq-global-search/kq-global-search.component';
import {KqCategorySidebarComponent} from './kq-category-sidebar/kq-category-sidebar.component';
import {KqNavbarComponent} from './kq-navbar/kq-navbar.component';
import {KqProductPanelComponent} from './kq-product-panel/kq-product-panel.component';
import {KqProductThumbComponent} from './kq-product-thumb/kq-product-thumb.component';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    AutoCompleteModule,
    RouterModule
  ],
  declarations: [
    KqGlobalSearchComponent,
    KqCategorySidebarComponent,
    KqNavbarComponent,
    KqProductPanelComponent,
    KqProductThumbComponent
  ],
  exports: [
    KqGlobalSearchComponent,
    KqCategorySidebarComponent,
    KqNavbarComponent,
    KqProductPanelComponent
  ]
})
export class GeneralModule {
}
