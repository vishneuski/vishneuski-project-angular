import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from "./modules/material/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FakeBackendInterceptor} from "./fake-back-end/fake-back-end.interceptor";
import {JwPaginationComponent} from 'jw-angular-pagination';

import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AppComponent} from './app.component';
import {ProductsComponent} from './products/containers/products/products.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/components/contacts-view/contacts.component';
import {NotFoundComponent} from './not-found/not-found.component';
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
import {BlogComponent} from './blog/blog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductsService} from "./products/services/products.service";
import {FiltrationComponent} from './products/components/filtration/filtration.component';
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    JwPaginationComponent,
    ProductsComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    BasketComponent,
    LoginViewComponent,
    RegisterViewComponent,
    AccountComponent,
    ProductsViewComponent,
    BlogComponent,
    FiltrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    }
  ]
})
export class AppModule {
}
