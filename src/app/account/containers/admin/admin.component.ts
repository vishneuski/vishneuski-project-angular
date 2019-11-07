import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../../../contacts/services/contacts.service";
import {Message} from "../../../contacts/models/message";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  messages: Message[];

  constructor(
    private contactsService: ContactsService
  ) {
  }

  ngOnInit() {
    this.contactsService.getfbMessages()
      .subscribe(messages => this.messages = messages);
  }

}
