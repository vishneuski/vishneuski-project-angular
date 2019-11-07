import {Component, Input, OnInit} from '@angular/core';
import {of} from "rxjs/internal/observable/of";
import {map} from "rxjs/operators";

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

  constructor() {
  }

  ngOnInit() {
  }

  filter(val): boolean {
    if (val !== this.loggedInUser.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
}
