import {Component, OnInit} from '@angular/core';
import {SignIn} from "../../model/signIn";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-account-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError: string;
  users: SignIn[];

  constructor(private accountService: LoginService,
              private router: Router) {

  }

  ngOnInit() {
    this.users = this.accountService.getUsers();
  }

  newSignIn(user: SignIn) {
    let userAccepted = this.users
      .filter(valOne => valOne.email === user.email)
      .filter(valTwo => valTwo.password === user.password);
    if (userAccepted && userAccepted.length === 1) {
      this.router.navigate(['basket']);
      this.loginError = null;
      console.log(`Access complete!`);
    } else {
      this.loginError = 'Wrong password or email!';
      console.log(`Password or email wrong!`);
    }
  }
}
