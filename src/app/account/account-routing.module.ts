import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AccountComponent} from './containers/account/account.component';
import {AddWineComponent} from "./components/add-wine/add-wine.component";
import {AuthGuard} from "../shared/guards/auth.guard";
import {ListWineComponent} from "./components/list-wine/containers/list-wine.component";
import {EditWineComponent} from "./components/edit-wine/edit-wine.component";

const routes: Routes = [
  {
    path: '', component: AccountComponent, canActivate: [AuthGuard], children: [
      {path: 'addWine', component: AddWineComponent, canActivate: [AuthGuard]},
      {path: 'listWine', component: ListWineComponent, canActivate: [AuthGuard]},
      {path: ':id', component: EditWineComponent, canActivate: [AuthGuard]}
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
