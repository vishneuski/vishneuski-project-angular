import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { AddWineComponent} from "./add-wine/add-wine.component";
import {AuthGuard} from "../shared/guards/auth.guard";

const routes: Routes = [
  {path: '', component: AccountComponent, canActivate: [AuthGuard]},
  {path: 'addWine', component: AddWineComponent, canActivate: [AuthGuard]},

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AccountRoutingModule { }
