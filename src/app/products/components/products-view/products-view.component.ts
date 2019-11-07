import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models/product.interface";
import {JwPaginationComponent} from "jw-angular-pagination";

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css'],
  providers: [JwPaginationComponent]
})
export class ProductsViewComponent {

  searchItem: string;
  pageOfItems: Array<any>;

  @Input()
  products: Product[];

  @Input()
  fbProducts: Product[];

  @Input()
  filteredProducts: Product[];

  @Input()
  isLoggedIn: boolean;

  @Output()
  basket: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  filter: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  priceFilter: EventEmitter<any> = new EventEmitter<any>();

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  addToBasket(product: Product) {
    this.basket.emit(product);
  }

  filterProduct(searchItem: string) {
    this.filter.emit(searchItem);
  }

  updateProduct() {
    this.searchItem = '';
    this.filterProduct(this.searchItem)
  }
}
