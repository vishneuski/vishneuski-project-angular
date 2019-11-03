import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AccountRoutingModule} from './account-routing.module';
import {AccountComponent} from './containers/account/account.component';
import {AddWineComponent} from "./components/add-wine/add-wine.component";
import {ListWineComponent} from './components/list-wine/containers/list-wine.component';
import { EditWineComponent } from './components/edit-wine/edit-wine.component';


@NgModule({
  declarations: [
    AccountComponent,
    AddWineComponent,
    ListWineComponent,
    EditWineComponent,
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
