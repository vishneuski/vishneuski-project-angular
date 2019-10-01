import { Injectable } from '@angular/core';
import {SignIn} from "../model/signIn";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: SignIn = {
    email: '',
    password: ''
  };

  getUser(): SignIn {
    return this.user;
  }
}
