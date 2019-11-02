import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from "../shared/guards/auth.guard";

import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {DetailWineComponent} from "./detail-wine/detail-wine.component";

const routes: Routes = [
  {path: '', component: ShoppingListComponent, canActivate: [AuthGuard]},
  {path: ':id', component: DetailWineComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class ShoppingListRoutingModule {
}
