import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <h1>Paiement</h1>
      <p>Page en cours de développement...</p>
    </div>
  `,
  styleUrl: './payment.css',
})
export class PaymentComponent {

}
