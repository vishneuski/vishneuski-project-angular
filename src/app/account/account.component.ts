import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-account-component',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  emailControl: FormControl;
  passwordControl: FormControl;
  submitControl: FormControl;

  ngOnInit() {
    this.emailControl = new FormControl('', Validators.required);
    this.passwordControl = new FormControl('', Validators.required);
    this.submitControl = new FormControl('');
  }
}
