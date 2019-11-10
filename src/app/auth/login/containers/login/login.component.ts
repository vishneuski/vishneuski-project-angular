import {Component, OnInit} from '@angular/core';
import {SignIn} from "../../model/signIn";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-account-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginError: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {
  }

  ngOnInit() {
  }

  logIn(user: SignIn) {
    console.log(user);
    this.authService.login(user.email, user.password)
      .then(res => {
        console.log(res);
        this.loginError = null;
        this.flashMessage.show(`${user.email} logged in successfully! Hi!`, {
          cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/products']);
      })

      .catch(err => {
        this.loginError = 'Wrong password or email!';
        console.log(err);
      })
  }
}
