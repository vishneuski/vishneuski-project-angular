import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from "../shared/guards/auth.guard";

import {ShoppingListComponent} from './shopping-list/containers/shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', component: ShoppingListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class ShoppingListRoutingModule {
}
