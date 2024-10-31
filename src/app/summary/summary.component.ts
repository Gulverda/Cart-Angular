import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div>
      <h3>Summary</h3>
      <div *ngFor="let item of cartItems">
        <p>{{ item.name }}: {{ item.price | currency }}</p>
      </div>
    </div>
  `
})
export class SummaryComponent {
  @Input() cartItems!: any[]; // Expecting an array of items
}
