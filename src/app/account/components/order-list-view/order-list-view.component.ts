import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-list-view',
  templateUrl: './order-list-view.component.html',
  styleUrls: ['./order-list-view.component.css']
})
export class OrderListViewComponent implements OnInit {


  @Input()
  orders: string;

  @Input()
  loggedInUser: string;

  constructor() { }

  ngOnInit() {
  }

}
