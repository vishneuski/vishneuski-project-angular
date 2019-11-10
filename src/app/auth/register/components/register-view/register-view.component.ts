import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterInfo} from "../../model/register-info";

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit, AfterViewInit {
  registerForm: FormGroup;

  @ViewChild('header', {static: false}) headerElementRef: ElementRef;

  @Input()
  user: RegisterInfo;

  @Output()
  register: EventEmitter<RegisterInfo> = new EventEmitter<RegisterInfo>();

  ngOnInit() {
    this.registerForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
    })
  }

  ngAfterViewInit() {
    this.headerElementRef.nativeElement.textContent = 'Create New Account';
  }

  onSubmit(): void {
    this.register.emit(this.registerForm.value);
  }
}
