import {Component, ViewChild} from '@angular/core';
import {RegisterInfo} from "../../model/register-info";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {RegisterViewComponent} from "../../components/register-view/register-view.component";

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  registerMessage: string;

  @ViewChild(RegisterViewComponent, {static: false})
  regView: RegisterViewComponent;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  unsavedData(): boolean {
    return this.regView.registerForm.dirty;
  }

  register(userInfo: RegisterInfo) {
    this.authService.register(userInfo.email, userInfo.password)
      .then(res => {
        this.registerMessage = 'You are register successfully';
        this.router.navigate(['/shopping-list'])
      })
      .catch(err => {
        this.registerMessage = 'You are not register';
        console.log(err.message)
      })
  }
}
