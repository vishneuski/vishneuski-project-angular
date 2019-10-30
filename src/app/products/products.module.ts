import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {JwPaginationComponent} from 'jw-angular-pagination';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './containers/products/products.component';
import { ProductsViewComponent } from "./components/products-view/products-view.component";
import { FiltrationComponent } from "./components/filtration/filtration.component";


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsViewComponent,
    FiltrationComponent,
    JwPaginationComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ProductsComponent]

})
export class ProductsModule { }
