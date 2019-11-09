import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {OrderService} from "../../../shopping-list/services/order.service";
import {Order} from "../../../models/order";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";


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
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService,
    private flashMessage: FlashMessagesService
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

  deleteOrder(product) {
    if (confirm('Are you sure?')) {
      this.flashMessage.show(`${product.name} was deleted! `, {
        cssClass: 'alert-danger', timeout: 3000
      });

      this.orderService.deleteOrder(product)
    }
    this.router.navigate(['/account/orderList']);
  }
}
