import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SignIn} from "../../model/signIn";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-log-in-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  @Input()
  user: SignIn;

  @Input()
  loginError: string;

  @Output()
  sighInTry: EventEmitter<SignIn> = new EventEmitter<SignIn>();

  constructor() {
  }

  ngOnInit() {
  }

  submitData(user: SignIn, isValid) {
    console.log(user);
    console.log(isValid);
    this.sighInTry.emit(user);
  }
}
