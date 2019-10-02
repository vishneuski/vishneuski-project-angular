import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {ServicesComponent} from "./services/services.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ProductsComponent} from "./products/containers/products/products.component";
import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./login/containers/login/login.component";
import {RegisterComponent} from "./register/containers/register/register.component";
import {BasketComponent} from "./basket/basket.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'basket', component: BasketComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
