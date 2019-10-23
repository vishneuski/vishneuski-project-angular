import { Injectable } from '@angular/core';
import { RegisterInfo } from "../model/register-info";

@Injectable()
export class RegisterService {

  user: RegisterInfo = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    password: '',
    repeatPassword: ''
  };

  getUser(): RegisterInfo {
    return this.user;
  }
}
