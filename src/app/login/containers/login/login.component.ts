import {Component, OnInit} from '@angular/core';
import {SignIn} from "../../model/signIn";
import {LoginService} from "../../services/login.service";


@Component({
  selector: 'app-account-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: SignIn[];

  constructor(private accountService: LoginService) {
  }

  ngOnInit() {
    this.users = this.accountService.getUsers();
  }

  newSignIn(user: SignIn) {
    let userAccepted = this.users
      .filter(valOne => valOne.email === user.email)
      .filter(valTwo => valTwo.password === user.password);
    if (userAccepted && userAccepted.length === 1) {
      console.log(`Access complete!`);
    } else {
      console.log(`Password or email wrong!`);
    }
  }
}
