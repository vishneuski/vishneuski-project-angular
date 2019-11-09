import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from "./login/containers/login/login.component";
import {RegisterComponent} from "./register/containers/register/register.component";

import {LostDataGuard} from "./register/guards/lost-data.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'register',
    component: RegisterComponent,
    canDeactivate: [LostDataGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LostDataGuard]
})
export class AuthRoutingModule {
}
