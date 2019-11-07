import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {ShoppingListRoutingModule} from './shopping-list-routing.module';
import {ShoppingListComponent} from './shopping-list/containers/shopping-list/shopping-list.component';
import { ShoppingListViewComponent } from './shopping-list/components/shopping-list-view/shopping-list-view.component';
// import {ProductDetailComponent} from '../products/components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListViewComponent,
    // ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule {
}
