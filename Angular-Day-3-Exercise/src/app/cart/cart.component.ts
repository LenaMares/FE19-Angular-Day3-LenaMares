import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cart: Iproducts [] = []
  
  constructor (private cartService: CartService) {}
  ngOnInit(): void {
    this.cart = this.cartService.getCart ()
    this.total = this.cartService.calculateTotal()
  }
  
total: number = 0

}


