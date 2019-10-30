import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import {LoginComponent} from "./login/containers/login/login.component";
import {RegisterComponent} from "./register/containers/register/register.component";

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
