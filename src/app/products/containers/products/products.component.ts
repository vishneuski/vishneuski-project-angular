import {Component} from '@angular/core';
import {Product} from "../../models/product.interface";
import {ProductsService} from "../../services/products.service";
import {forkJoin} from "rxjs";
import {FiltrationComponent} from "../../components/filtration/filtration.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [FiltrationComponent]
})

export class ProductsComponent {

  fbProducts: Product[];
  products: Product[];
  filteredProducts: Product[];
  productMap: Map<number, Product>;

  filterProducts(searchString?: string) {
    if (searchString === '' || searchString === undefined || searchString === null) {
      return this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products
        .filter((product) =>
          product.name.indexOf(searchString) !== -1);
      console.log(this.filteredProducts);
      return this.filteredProducts;
    }
  }

  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit() {
    const products = this.productsService.getfbProducts();
    this.productsService.getfbProducts().subscribe(
      products => {
        this.fbProducts = products;

      }
    );

  //   forkJoin(products).subscribe(
  //     ([products]: [Product[]]) => {
  //       const myMap = products.map<[number, Product]>(product => [
  //         product.id,
  //         product
  //       ]);
  //       this.productMap = new Map<number, Product>(myMap);
  //       this.products = products;
  //       this.filteredProducts = this.products;
  //     }
  //   );
  }

  // addToBasket(product: Product) {
  //   console.log('in products');
  //   this.productsService.addProduct(product);
  // }
  //
  // priceFilter(value) {
  //   this.productsService.filterForPrice(value);
  //   console.log('Filter for prise form value', value);
  // }
}
