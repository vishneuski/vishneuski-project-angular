import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Nav} from "../../../models/nav";
import {AuthService} from "../../../auth/services/auth.service";
import {ListWineComponent} from "../../components/list-wine/containers/list-wine.component";
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
        } else {
          this.isLoggedIn = false;
        }
      }
    );
  }
}
