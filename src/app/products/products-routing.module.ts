import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductsComponent} from './containers/products/products.component';
import {AuthGuard} from "../shared/guards/auth.guard";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";

const routes: Routes = [
  {path: '', component: ProductsComponent, canActivate: [AuthGuard]},
  {path: ':id', component: ProductDetailComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class ProductsRoutingModule {
}
