import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactsComponent} from "./contacts/components/contacts-view/contacts.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ProductsComponent} from "./products/containers/products/products.component";
import {AboutComponent} from "./components/about/about.component";
import {LoginComponent} from "./auth/login/containers/login/login.component";
import {RegisterComponent} from "./auth/register/containers/register/register.component";
import {BasketComponent} from "./basket/basket.component";
import {AuthGuard} from "./guards/auth.guard";


const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'products', component: ProductsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
  {path: 'basket', component: BasketComponent, canActivate: [AuthGuard]},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
