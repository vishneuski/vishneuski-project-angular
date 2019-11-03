import {Component, OnInit} from '@angular/core';
import {Nav} from "../../models/nav";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  vis = true;

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

  constructor() {
  }

  ngOnInit() {
  }

}
