import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SignIn} from "../../model/signIn";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Observable, of} from "rxjs";

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

  submitData(user: SignIn) {
    this.sighInTry.emit(user);
  }
}
