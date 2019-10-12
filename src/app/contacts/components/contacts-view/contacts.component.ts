import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactMessageForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.contactMessageForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, Validators.required),
    })
  }

  onSubmit(): void {
    console.log(this.contactMessageForm.value);
  }

}

