import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AccountRoutingModule} from './account-routing.module';
import {AccountComponent} from './account/account.component';
import {AddWineComponent} from "./add-wine/add-wine.component";
import {ListWineComponent} from './list-wine/list-wine.component';


@NgModule({
  declarations: [
    AccountComponent,
    AddWineComponent,
    ListWineComponent,
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
