import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstNameControl: FormControl;
  lastNameControl: FormControl;
  dateOfBirthControl: FormControl;
  phoneControl: FormControl;
  mailControl: FormControl;
  submitControl: FormControl;

  ngOnInit() {
    this.firstNameControl = new FormControl('user', Validators.required);
    this.lastNameControl = new FormControl('', Validators.required);
    this.dateOfBirthControl = new FormControl('01/01/2001', Validators.required);
    this.phoneControl = new FormControl('', Validators.required);
    this.mailControl = new FormControl('', Validators.required);
    this.submitControl = new FormControl('');
  }
}
