export interface Order {
  email?: string,
  order: {
    id?: string,
    email?: string,
    name?: string,
    price?: number,
    country?: string
    vintage?: number,
    quantity?: number,
    photo?: string
  }
}
