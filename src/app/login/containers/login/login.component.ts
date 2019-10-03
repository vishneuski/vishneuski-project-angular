import {Component, OnInit} from '@angular/core';
import {SignIn} from "../../model/signIn";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";


@Component({
  selector: 'app-account-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  request: Subscription;
  loginError: string;
  users: SignIn[];

  constructor(private accountService: LoginService,
              private router: Router) {}

  ngOnInit() {
    this.users = this.accountService.getUsers();
  }

  logIn(user: SignIn) {
    if(this.request) {
      this.request.unsubscribe();
    }
    this.request = this.accountService
      .logIn(user.userName, user.password)
      .subscribe((value) => {
        if (value) {
          this.router.navigate(['basket']);
          this.loginError = null;
          console.log(`Access complete!`);
        } else {
          this.loginError = 'Wrong password or email!';
        }
      });
  }
}
