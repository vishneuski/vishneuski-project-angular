import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {ContactsRoutingModule} from './contacts-routing.module';

import {ContactsComponent} from './containers/contacts/contacts.component';
import {ContactsViewComponent} from "./components/contacts-view/contacts-view.component";


@NgModule({
  declarations: [
    ContactsComponent,
    ContactsViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule {
}
