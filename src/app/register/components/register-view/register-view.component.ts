import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterInfo} from "../../model/register-info";

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {
  registerForm: FormGroup;

  @Input()
  user: RegisterInfo;

  @Input()
  registerMessage;

  @Output()
  register: EventEmitter<RegisterInfo> = new EventEmitter<RegisterInfo>();

  constructor() { }

  ngOnInit() {

    this.registerForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
    })
  }

  onSubmit(): void {
    console.log(this.registerForm.value);
    this.register.emit(this.registerForm.value);
  }

}
