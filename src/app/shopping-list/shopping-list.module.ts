import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule { }
