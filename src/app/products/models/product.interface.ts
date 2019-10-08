export interface Product {
  id: number,
  price: number,
  name: string,
  country: string,
  vintage: number;
  available: number;
  // photo?: string;
}

export interface Item {
  product_id: number,
  quantity: number
}
