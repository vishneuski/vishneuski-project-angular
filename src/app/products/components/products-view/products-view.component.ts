import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from "../../models/product.interface";
import {FiltrationComponent} from "../filtration/filtration.component";
import {JwPaginationComponent} from "jw-angular-pagination";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css'],
  providers: [FiltrationComponent, JwPaginationComponent]
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
    // update current page of items
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

  filterPrice(form) {
    this.priceFilter.emit(form)
  }
}
