import { Injectable } from '@angular/core';
import { Iproducts } from './Iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Iproducts[] = []

  addToCart(Obj: Iproducts) {
    this.cart.push(Obj)
  }

  getCart() {
    return this.cart
  }

  clearCart() {
    this.cart = []
    return this.cart
  }

  calculateTotal() {
    let total: number = 0
    for (let val of this.cart) {
      total = total + val.price
    }
    return total
  }

  constructor() { }
}
