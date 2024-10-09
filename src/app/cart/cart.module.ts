import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartItemComponent } from '../cart-item/cart-item.component'; // Import CartItemComponent
import { CouponComponent } from '../coupon/coupon.component';
import { SummaryComponent } from '../summary/summary.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // CartComponent,
    CartItemComponent,
    // CouponComponent,
    // SummaryComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    // CartItemComponent,  // Export CartItemComponent here
    // CouponComponent,
    // SummaryComponent
  ]
})
export class CartModule { }
