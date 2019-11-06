import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {ContactsRoutingModule} from './contacts-routing.module';
import {ContactsComponent} from './containers/contacts/contacts.component';


@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule {
}
