import {Injectable} from '@angular/core';
import {SignIn} from "../model/signIn";
import {Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  users: SignIn[] = [
    {userName: 'q', password: 'qwe'},
    {userName: 'a', password: 'asd'},
    {userName: 'z', password: 'zxc'}
  ];

  getUsers(): SignIn[] {
    return this.users;
  }

  logIn(userName, password): Observable<SignIn> {
    let userAccepted = this.users
      .filter(val => val.userName === userName)
      .filter(val2 => val2.password === password);
    if (userAccepted && userAccepted.length === 1) {
      return of(userAccepted[0]);
    } else {
      return of(null);
    }
  }
}
