import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartComponent {
  cartItems: any[] = [];
  subtotal = 0;
  savings = 0;
  total = 0;

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
  }

  updateQuantity(index: number, quantity: number): void {
    if (quantity > 0) {
      this.cartItems[index].quantity = quantity;
    }
  }
}