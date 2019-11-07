import {Component, Input, OnInit} from '@angular/core';
import {Nav} from "../../../models/nav";

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {

  @Input()
  isAdmin: string;

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
    },
    {
      link: '/account/orderList',
      name: 'Order List',
      exact: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
