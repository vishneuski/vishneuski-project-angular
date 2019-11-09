import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductsComponent} from './containers/products/products.component';
import {AuthGuard} from "../shared/guards/auth.guard";
import {ProductsResolve} from "./resolvers/productsResolve";

const routes: Routes = [
  {
    path: '', component: ProductsComponent,
    resolve: {resolvedProducts: ProductsResolve},
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard
    , ProductsResolve
  ]
})
export class ProductsRoutingModule {
}
