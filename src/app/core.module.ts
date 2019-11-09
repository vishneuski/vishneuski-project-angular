import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "./auth/services/auth.service";
import {ProductsService} from "./products/services/products.service";
import {ContactsService} from "./contacts/services/contacts.service";
import {OrderService} from "./shopping-list/services/order.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    ProductsService,
    ContactsService,
    OrderService
  ]
})
export class CoreModule {
}
