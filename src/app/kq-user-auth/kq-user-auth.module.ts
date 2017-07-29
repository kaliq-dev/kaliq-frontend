import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KqUserRegComponent} from './kq-user-reg/kq-user-reg.component';
import {KqUserLoginComponent} from './kq-user-login/kq-user-login.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    KqUserRegComponent,
    KqUserLoginComponent
  ],
  exports: [
    KqUserRegComponent,
    KqUserLoginComponent
  ],
  providers: [
    AuthService
  ]
})
export class KqUserAuthModule {
}
