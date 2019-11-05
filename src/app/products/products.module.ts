import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {ProductsRoutingModule} from './products-routing.module';

import {ProductsComponent} from './containers/products/products.component';
import {ProductsViewComponent} from "./components/products-view/products-view.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";

import {FiltrationComponent} from "./components/filtration/filtration.component";
import {JwPaginationComponent} from 'jw-angular-pagination';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsViewComponent,
    ProductDetailComponent,
    FiltrationComponent,
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
