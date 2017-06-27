import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AutoCompleteModule} from 'primeng/primeng';
import {KqGlobalSearchComponent} from './kq-global-search/kq-global-search.component';
import { KqCategorySidebarComponent } from './kq-category-sidebar/kq-category-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    AutoCompleteModule
  ],
  declarations: [
    KqGlobalSearchComponent,
    KqCategorySidebarComponent
  ],
  exports: [
    KqGlobalSearchComponent,
    KqCategorySidebarComponent
  ]
})
export class GeneralModule {
}
