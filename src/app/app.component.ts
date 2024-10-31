import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CouponComponent } from './coupon/coupon.component';
import { SummaryComponent } from './summary/summary.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CartItemComponent, CouponComponent, SummaryComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cart';
}
