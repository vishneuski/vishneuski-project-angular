import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../products/models/product.interface";

@Component({
  selector: 'app-list-wine-view',
  templateUrl: './list-wine-view.component.html',
  styleUrls: ['./list-wine-view.component.css']
})
export class ListWineViewComponent implements OnInit {

  @Input()
  loggedInUser: string;

  @Input()
  products: Product[];

  @Output()
  edit: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  delete: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }


  filter(val): boolean {
    console.log(this.loggedInUser);
    console.log(this.loggedInUser);
    if (val !== this.loggedInUser.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }

  editWine(product) {
    this.edit.emit(product);
  }

  deleteWine(product) {
    this.delete.emit(product)
  }


}
