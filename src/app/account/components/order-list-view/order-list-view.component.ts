import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Order} from "../../../models/order";

@Component({
  selector: 'app-order-list-view',
  templateUrl: './order-list-view.component.html',
  styleUrls: ['./order-list-view.component.css']
})
export class OrderListViewComponent {


  @Input()
  orders: string;

  @Input()
  loggedInUser: string;

  @Output()
  deleteOrd: EventEmitter<Order> = new EventEmitter<Order>();

  filter(val): boolean {
    if (val !== this.loggedInUser.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }

  deleteOrder(order) {
    console.log(order);
    this.deleteOrd.emit(order)
  }
}
