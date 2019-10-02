import { Injectable } from '@angular/core';
import {SignIn} from "../model/signIn";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: SignIn[]= [
    {email: 'q.com', password: 'qwe'},
    {email: 'a.com', password: 'asd'},
    {email: 'z.com', password: 'zxc'},
    ];

  getUsers(): SignIn[] {
    return this.users;
  }
}
