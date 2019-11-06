import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../../products/models/product.interface";
import {Message} from "../../models/message";

@Component({
  selector: 'app-contacts-view',
  templateUrl: './contacts-view.component.html',
  styleUrls: ['./contacts-view.component.css']
})
export class ContactsViewComponent implements OnInit {

  contactMessageForm: FormGroup;

  @Output()
  newMessage: EventEmitter<Message> = new EventEmitter<Message>();

  constructor() { }

  ngOnInit() {
    this.contactMessageForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, Validators.required),
    })
  }

  onSubmit(message): void {
    console.log(message.value);
    this.newMessage.emit(message.value)
  }
}

