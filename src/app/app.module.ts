import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {ProductsComponent} from './products/products.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ServicesComponent} from './services/services.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ProductCartComponent} from './shared/product-cart/product-cart.component';
import {ProductCartService} from "./shared/product-cart/product-cart.service";
import {LoginComponent} from './logIn/containers/login/login.component';
import {RegisterComponent} from './register/register.component';
import {BasketComponent} from "./basket/basket.component";
import { LoginViewComponent } from './logIn/components/login-view/login-view.component';

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
    ProductCartComponent,
    LoginComponent,
    RegisterComponent,
    BasketComponent,
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductCartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
