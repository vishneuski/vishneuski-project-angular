import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import {AuthGuard} from "../shared/guards/auth.guard";

const routes: Routes = [
  {path: '', component: AccountComponent, canActivate: [AuthGuard]},

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AccountRoutingModule { }
