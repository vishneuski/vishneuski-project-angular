import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "./auth/services/auth.service";
import {ProductsService} from "./products/services/products.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    ProductsService,
  ]
})
export class CoreModule {
}
