import {Component, OnInit} from '@angular/core';
import {SignIn} from "../../model/signIn";
import {LoginService} from "../../services/login.service";


@Component({
  selector: 'app-account-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SignIn;

  newSignIn(event: SignIn) {
    console.log(
      `Event mail - ${event.email}
    Event password - ${event.password}`);
  }

  constructor(private accountService: LoginService) {
  }

  ngOnInit() {
    this.user = this.accountService.getUser();
  }


}
