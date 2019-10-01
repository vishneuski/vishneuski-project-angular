import { Component, OnInit } from '@angular/core';
import { SignIn } from "../../../model/signIn";
import { LogInService} from "../../services/logIn.service";


@Component({
  selector: 'app-account-component',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css']
})
export class LogInComponent implements OnInit {

  user: SignIn;

  constructor(private accountService: LogInService){}

  ngOnInit() {
    this.user = this.accountService.getUser();
  }

  submitData(user: SignIn, isValid) {
    console.log(user);
    console.log(isValid);
  }
}
