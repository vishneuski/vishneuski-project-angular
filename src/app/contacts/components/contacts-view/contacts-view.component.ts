import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Message} from "../../models/message";

@Component({
  selector: 'app-contacts-view',
  templateUrl: './contacts-view.component.html',
  styleUrls: ['./contacts-view.component.css']
})
export class ContactsViewComponent implements OnInit {

  contactMessageForm: FormGroup;

  @Input()
  userEmail: string;

  @Output()
  newMessage: EventEmitter<Message> = new EventEmitter<Message>();

  constructor() {
  }

  ngOnInit() {
    this.contactMessageForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email, Validators.minLength(3)]),
      'message': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    })
  }

  onSubmit(message): void {
    console.log(message.value);
    this.newMessage.emit(message.value)
  }
}

