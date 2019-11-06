import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
// import {ContactsComponent} from "./contacts/components/contacts-view/contacts.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  // {
  //   path: 'contacts', component: ContactsComponent
  // },
  {
    path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)
  },
  {
    path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: '**', component: NotFoundComponent
  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
