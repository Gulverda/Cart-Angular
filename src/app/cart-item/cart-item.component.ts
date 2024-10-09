import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  template: `
    <div>
      <h3>{{ item.name }}</h3>
      <p>Price: {{ item.price | currency }}</p>
    </div>
  `
})
export class CartItemComponent {
  @Input() item: any; // Define an input property for the item
}
