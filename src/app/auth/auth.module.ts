import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { LoginComponent } from "./login/containers/login/login.component";
import { LoginViewComponent } from "./login/components/login-view/login-view.component";
import { RegisterComponent } from "./register/containers/register/register.component";
import { RegisterViewComponent } from "./register/components/register-view/register-view.component";


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    LoginViewComponent,
    RegisterComponent,
    RegisterViewComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
