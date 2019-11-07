import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {OrderService} from "../../../shopping-list/services/order.service";
import {Order} from "../../../models/order";


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;
  orders: Order[];

  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) {
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

    this.orderService.getfbOrders().subscribe(
      orders => this.orders = orders
    );
  }
}
