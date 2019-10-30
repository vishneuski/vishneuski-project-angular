import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JwPaginationComponent} from 'jw-angular-pagination';

import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AppComponent} from './app.component';
// import {ProductsComponent} from './products/containers/products/products.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactsComponent} from './contacts/components/contacts-view/contacts.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
// import {LoginComponent} from './auth/login/containers/login/login.component';
// import {RegisterComponent} from './auth/register/containers/register/register.component';
import {BasketComponent} from "./basket/basket.component";
// import {LoginViewComponent} from './auth/login/components/login-view/login-view.component';
// import {RegisterViewComponent} from './auth/register/components/register-view/register-view.component';
import {AccountComponent} from './account/account.component';
// import {ProductsViewComponent} from './products/components/products-view/products-view.component';
import {BlogComponent} from './components/blog/blog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductsService} from "./products/services/products.service";
import {FiltrationComponent} from './products/components/filtration/filtration.component';
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    JwPaginationComponent,
    // ProductsComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    // LoginComponent,
    // RegisterComponent,
    BasketComponent,
    // LoginViewComponent,
    // RegisterViewComponent,
    AccountComponent,
    // ProductsViewComponent,
    BlogComponent,
    FiltrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  exports: [
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    ProductsService,
    AuthService,
  ]
})
export class AppModule {
}
