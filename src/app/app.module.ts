import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CouponComponent } from './coupon/coupon.component';
import { SummaryComponent } from './summary/summary.component';
import { FormsModule } from '@angular/forms'; // Required for ngModel in CouponComponent

@NgModule({
  declarations: [
    // AppComponent,
    CartComponent,
    CartItemComponent,  // Ensure CartItemComponent is declared
    CouponComponent,    // Ensure CouponComponent is declared
    SummaryComponent    // Ensure SummaryComponent is declared
  ],
  imports: [
    BrowserModule,
    FormsModule // Required for two-way data binding (ngModel) in CouponComponent
  ],
  // bootstrap: [AppComponent]
})
export class AppModule { }
