import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <h2>Shopping Cart</h2>
    <app-cart-item *ngFor="let item of cartItems" [item]="item"></app-cart-item>
    <app-coupon></app-coupon>
    <app-summary [cartItems]="cartItems"></app-summary>
  `
})
export class CartComponent {
  cartItems = [
    { name: 'Item 1', price: 100 },
    { name: 'Item 2', price: 200 }
  ];
}
