import { Component, OnInit } from '@angular/core';
import {Nav} from "../../models/nav";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  nav: Nav[] = [
    {
      link: '/account',
      name: 'Account Detail',
      exact: true
    },
    {
      link: '/account',
      name: 'Add Wine',
      exact: true
    },
    {
      link: '/account',
      name: 'Edit Wine',
      exact: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
