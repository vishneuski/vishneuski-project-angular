import {Component, ViewChild} from '@angular/core';
import {RegisterInfo} from "../../model/register-info";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {RegisterViewComponent} from "../../components/register-view/register-view.component";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  @ViewChild(RegisterViewComponent, {static: false})
  regView: RegisterViewComponent;

  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private authService: AuthService
  ) {
  }

  unsavedData(): boolean {
    return this.regView.registerForm.dirty && this.regView.registerForm.invalid;
  }

  register(userInfo: RegisterInfo) {
    this.authService.register(userInfo.email, userInfo.password)
      .then(res => {
        this.flashMessage.show(`${userInfo.email}. You have successfully registered! Welcome!`, {
          cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/products'])
      })
      .catch(err => {
        if (err.message === 'The email address is already in use by another account.') {
          this.flashMessage.show(`You are registered already! Log in, please!)`, {
            cssClass: 'alert-success', timeout: 3000
          });
          this.router.navigate(['/auth/login']);
        } else if (err.message !== 'The email address is already in use by another account.') {
          this.flashMessage.show(`You are not register! Sorry! Try later!`, {
            cssClass: 'alert-danger', timeout: 3000
          });
          this.router.navigate(['/auth/register']);
          console.log(err.message)
        }
      })
  }
}
