import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AccountComponent} from './containers/account/account.component';
import {AddWineComponent} from "./containers/add-wine/add-wine.component";
import {AuthGuard} from "../shared/guards/auth.guard";
import {ListWineComponent} from "./containers/list-wine/list-wine.component";
import {AdminComponent} from "./containers/admin/admin.component";
import {OrderListComponent} from "./containers/order-list/order-list.component";
import {EditWineComponent} from "./containers/edit-wine/edit-wine.component";

const routes: Routes = [
  {
    path: '', component: AccountComponent, canActivate: [AuthGuard], children: [
      {path: 'addWine', component: AddWineComponent, canActivate: [AuthGuard]},
      {path: 'listWine', component: ListWineComponent, canActivate: [AuthGuard]},
      {path: 'orderList', component: OrderListComponent, canActivate: [AuthGuard]},
      {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
      {path: ':id', component: EditWineComponent, canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AccountRoutingModule {
}
