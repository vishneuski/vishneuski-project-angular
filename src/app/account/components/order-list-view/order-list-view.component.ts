import {Component, Input} from '@angular/core';

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

  filter(val): boolean {
    if (val !== this.loggedInUser.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
}
