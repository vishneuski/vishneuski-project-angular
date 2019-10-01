import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 registerForm: FormGroup;

 constructor() {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      'firstName': new FormControl('user', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'dateOfBirth': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
      'repeatPassword': new FormControl('', Validators.required),
    })
  }
}
