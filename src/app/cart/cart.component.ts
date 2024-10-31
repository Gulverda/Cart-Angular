import { Component } from '@angular/core';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { CouponComponent } from "../coupon/coupon.component";
import { SummaryComponent } from "../summary/summary.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  template: `
    <h2>Shopping Cart</h2>
    <app-cart-item *ngFor="let item of cartItems" [item]="item"></app-cart-item>
    <app-coupon></app-coupon>
    <app-summary [cartItems]="cartItems"></app-summary>
  `,
  imports: [CartItemComponent, CouponComponent, SummaryComponent]
})
export class CartComponent {
  cartItems = [
    { name: 'Item 1', price: 100 },
    { name: 'Item 2', price: 200 }
  ];
}
