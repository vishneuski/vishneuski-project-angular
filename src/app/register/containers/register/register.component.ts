import {Component, OnInit} from '@angular/core';
import {RegisterService} from "../../services/register.service";
import {RegisterInfo} from "../../model/register-info";

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  user: RegisterInfo;

  newRegister(event: RegisterInfo) {
    console.log(`Register event - ${event.firstName}`
    )
  }

  constructor(private registerService: RegisterService) {
  }

  ngOnInit() {
    this.user = this.registerService.getUser();
  }
}
