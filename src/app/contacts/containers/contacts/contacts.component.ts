import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../../services/contacts.service";
import {AuthService} from "../../../auth/services/auth.service";
import {Message} from "../../models/message";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;

  constructor(
    private flashMessage: FlashMessagesService,
    private contactsService: ContactsService,
    private authService: AuthService
  ) {

  }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
        if (auth) {
          this.isLoggedIn = true;
          this.loggedInUser = auth.email;
        } else {
          this.isLoggedIn = false;
        }
      }
    );
  }

  addNewMessage(message: Message) {
    this.contactsService.addMessage(message);
    this.flashMessage.show(`${message.firstName}. Your message send successfully! `, {
      cssClass: 'alert-success', timeout: 3000
    });
  }
}

