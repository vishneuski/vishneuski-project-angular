import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;
  isAdmin: boolean = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
        if (auth) {
          this.isLoggedIn = true;
          this.loggedInUser = auth.email;
          if (this.loggedInUser === 'vishneuski87@gmail.com') {
            this.isAdmin = true;
          }
        } else {
          this.isLoggedIn = false;
        }
      }
    );
  }
}
