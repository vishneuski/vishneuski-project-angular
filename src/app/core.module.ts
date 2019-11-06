import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "./auth/services/auth.service";
import {ProductsService} from "./products/services/products.service";
import {ContactsService} from "./contacts/services/contacts.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    ProductsService,
    ContactsService
  ]
})
export class CoreModule {
}
