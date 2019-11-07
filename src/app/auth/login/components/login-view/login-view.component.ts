import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SignIn} from "../../model/signIn";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-log-in-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  loginForm: FormGroup;

  @Input()
  loginError: string;

  @Output()
  sighInTry: EventEmitter<SignIn> = new EventEmitter<SignIn>();

  constructor() {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
      }
    )
  }

  submitData(user: SignIn) {
    this.sighInTry.emit(user);
  }
}
