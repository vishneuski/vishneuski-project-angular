import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {ProductsComponent} from './products/containers/products/products.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ServicesComponent} from './services/services.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/containers/login/login.component';
import {RegisterComponent} from './register/containers/register/register.component';
import {BasketComponent} from "./basket/basket.component";
import {LoginViewComponent} from './login/components/login-view/login-view.component';
import {RegisterViewComponent} from './register/components/register-view/register-view.component';
import {AccountComponent} from './account/account.component';
import {ProductsViewComponent} from './products/components/products-view/products-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    NotFoundComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    BasketComponent,
    LoginViewComponent,
    RegisterViewComponent,
    AccountComponent,
    ProductsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
