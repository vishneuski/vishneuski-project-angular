import { Injectable } from '@angular/core';
import {SignIn} from "../model/signIn";

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  user: SignIn = {
    email: '',
    password: ''
  };

  getUser(): SignIn {
    return this.user;
  }
}
