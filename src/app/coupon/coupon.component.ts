import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-coupon',
  template: `
    <div>
      <h3>Coupon Code</h3>
      <input type="text" [(ngModel)]="couponCode" placeholder="Enter coupon" />
      <button (click)="applyCoupon()">Apply Coupon</button>
      <div *ngIf="message">{{ message }}</div>
    </div>
  `
})
export class CouponComponent {
  couponCode: string = ''; // Model for the coupon code
  message: string = ''; // Message to display after applying the coupon

  // Function to handle coupon application
  applyCoupon() {
    if (this.couponCode) {
      this.message = `Coupon "${this.couponCode}" applied successfully!`;
      // Add your logic for applying the coupon code here
    } else {
      this.message = 'Please enter a coupon code.';
    }
  }
}
