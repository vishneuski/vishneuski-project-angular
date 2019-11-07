import {Component, OnInit} from '@angular/core';
import {Nav} from "../../../models/nav";
import {AuthService} from "../../../auth/services/auth.service";
import {Product} from "../../../products/models/product.interface";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;
  product?: Product;
  isAdmin: boolean = false;

  nav: Nav[] = [
    {
      link: '/account/addWine',
      name: 'Add Wine',
      exact: true
    },
    {
      link: '/account/listWine',
      name: 'Wine List',
      exact: true
    }
  ];

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
