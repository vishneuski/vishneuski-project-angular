import {Component, OnInit} from '@angular/core';
import {SignIn} from "../../model/signIn";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";


@Component({
  selector: 'app-account-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginError: string;
  users: SignIn[];

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logIn(user: SignIn) {
    console.log(user);
    this.authService.login(user.email, user.password)
      .then(res => {
        console.log(res, 'success!!! ');
        this.loginError = null;
        this.router.navigate(['shopping-list']);
      })
      .catch(err => {
        this.loginError = 'Wrong password or email!';
        console.log(err, 'error!!!')
      })
  }
}
