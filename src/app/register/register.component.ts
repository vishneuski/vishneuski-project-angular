import { Component, OnInit } from '@angular/core';
import { FormControl} from "@angular/forms";

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit(){
  firstNameControl : FormControl;
  lastNameControl : FormControl;
  dateOfBirthControl: FormControl;
  phoneControl: FormControl;
  mailControl: FormControl;
  ageControl: FormControl;
  submitControl: FormControl;

  ngOnInit() {
    this.firstNameControl = new FormControl('user');
    this.lastNameControl = new FormControl();
    this. dateOfBirthControl = new FormControl();
    this.phoneControl = new FormControl();
    this.mailControl = new FormControl();
    this.ageControl = new FormControl();
    this.submitControl = new FormControl();
  }
}
