import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AccountRoutingModule} from './account-routing.module';
import {AccountComponent} from './containers/account/account.component';
import {AddWineComponent} from "./containers/add-wine/add-wine.component";
import {ListWineComponent} from './containers/list-wine/list-wine.component';
import { EditWineComponent } from './containers/edit-wine/edit-wine.component';
import { AddWineViewComponent } from './components/add-wine-view/add-wine-view.component';
import { EditWineViewComponent } from './components/edit-wine-view/edit-wine-view.component';
import { ListWineViewComponent } from './components/list-wine-view/list-wine-view.component';
import { AdminComponent } from './containers/admin/admin.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { OrderListComponent } from './containers/order-list/order-list.component';
import { AccountViewComponent } from './components/account-view/account-view.component';
import { OrderListViewComponent } from './components/order-list-view/order-list-view.component';


@NgModule({
  declarations: [
    AccountComponent,
    AddWineComponent,
    ListWineComponent,
    EditWineComponent,
    AddWineViewComponent,
    EditWineViewComponent,
    ListWineViewComponent,
    AdminComponent,
    AdminViewComponent,
    OrderListComponent,
    AccountViewComponent,
    OrderListViewComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AccountModule {
}
