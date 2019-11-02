import {Component} from '@angular/core';
import {Nav} from "./models/nav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/products',
      name: 'Products',
      exact: true
    },
    {
      link: '/about',
      name: 'About',
      exact: true
    },
    {
      link: '/contacts',
      name: 'Contacts',
      exact: true
    },
    {
      link: '/account',
      name: 'Account',
      exact: true
    }
  ];
}
