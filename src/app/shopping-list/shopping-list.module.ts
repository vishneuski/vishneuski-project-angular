import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {ShoppingListRoutingModule} from './shopping-list-routing.module';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {AddWineComponent} from './add-wine/add-wine.component';
import {DetailWineComponent} from './detail-wine/detail-wine.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    AddWineComponent,
    DetailWineComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule {
}
