import { Injectable } from '@angular/core';
import {SignIn} from "../model/signIn";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  users: SignIn[]= [
    {userName: 'q', password: 'qwe'},
    {userName: 'a', password: 'asd'},
    {userName: 'z', password: 'zxc'},
    ];

  getUsers(): SignIn[] {
    return this.users;
  }

  logIn(userName, password): SignIn {
    let userAccepted = this.users
      .filter(val => val.password === password)
      .filter(val => val.userName === userName);
    if (userAccepted && userAccepted.length === 1) {
      console.log('Service GOOD!');
      return userAccepted[0];
    } else {
      console.log('Service BAD!');
      return null;
    }
  }
}
