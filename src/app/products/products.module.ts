import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {ProductsRoutingModule} from './products-routing.module';

import {ProductsComponent} from './containers/products/products.component';
import {ProductsViewComponent} from "./components/products-view/products-view.component";

import {JwPaginationComponent} from 'jw-angular-pagination';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsViewComponent,
    JwPaginationComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ProductsModule {
}
