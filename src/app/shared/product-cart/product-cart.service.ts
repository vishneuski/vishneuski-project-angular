import {Injectable} from '@angular/core';
import {Product} from "../../products/model/product";

@Injectable()

export class ProductCartService {
  private listProducts: Product[] = [
    {
      id: 1,
      producer: 'jan pole shane',
      country: 'France',
      vintage: 1990,
      type: 'white',
      available: 2,
      volume: 0.75,
      prise: 100,
      photo: './../../assets/images/bottle.jpg'
    }];
  //   ,
  //   {
  //     id: 2,
  //     producer: 'dolce vita',
  //     country: 'Italy',
  //     vintage: 1980,
  //     type: 'red',
  //     available: 3,
  //     volume: 0.75,
  //     prise: 120,
  //   },
  //   {
  //     id: 3,
  //     producer: 'inkermann',
  //     country: 'Russia',
  //     vintage: 1999,
  //     type: 'white',
  //     available: 5,
  //     volume: 0.75,
  //     prise: 85,
  //   },
  //   {
  //     id: 1,
  //     producer: 'don pedro',
  //     country: 'Chily',
  //     vintage: 2001,
  //     type: 'red',
  //     available: 1,
  //     volume: 0.75,
  //     prise: 150,
  //   },
  // ];

  getProductsList(): Product[] {
    return this.listProducts;
  }

}
