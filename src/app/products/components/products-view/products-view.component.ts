import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Product} from "../../models/product.interface";

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css'],
})
export class ProductsViewComponent {

  @ViewChild("searchInput", {static: false})
    input: ElementRef;

  searchItem: string;

  @Input()
  products: Product[];

  @Input()
  filteredProducts: Product[];

  @Output()
  basket: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  filter: EventEmitter<string> = new EventEmitter<string>();

  // @Output()
  // update: EventEmitter<any> = new EventEmitter<any>();

  addToBasket(product: Product) {
    this.basket.emit(product);
  }

  filterProduct(searchItem: string) {
    console.log(this.input.nativeElement.textContent, 'ViewChild');
    this.filter.emit(searchItem);
  }

  updateProduct() {
     this.searchItem = '';
     this.filterProduct(this.searchItem)
  }
}
