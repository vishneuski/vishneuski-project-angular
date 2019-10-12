import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterInfo} from "../register/model/register-info";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactMessageForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}

export class RegisterViewComponent implements OnInit {
  registerForm: FormGroup;

  @Input()
  user: RegisterInfo;

  @Output()
  registerTry: EventEmitter<RegisterInfo> = new EventEmitter<RegisterInfo>();

  constructor() { }

  ngOnInit() {

    this.registerForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'dateOfBirth': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'repeatPassword': new FormControl(null, Validators.required),
    })
  }

  onSubmit(): void {
    console.log(this.registerForm.value);
    this.registerTry.emit(this.registerForm.value);
  }

}

