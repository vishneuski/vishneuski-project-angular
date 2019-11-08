import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SignIn} from "../../model/signIn";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-log-in-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;

  @ViewChild('header', {static: false}) headerElementRef: ElementRef;

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

  ngAfterViewInit() {
    this.headerElementRef.nativeElement.textContent = 'Log In';
  }

  submitData(user: SignIn) {
    this.sighInTry.emit(user);
  }
}
