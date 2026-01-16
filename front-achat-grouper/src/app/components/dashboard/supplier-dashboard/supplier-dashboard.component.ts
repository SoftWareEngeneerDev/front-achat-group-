import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-supplier-dashboard',
  imports: [CommonModule,RouterModule],
  template: `
    <div class="container">
      <h1>Tableau de bord Fournisseur</h1>
      <p>Page en cours de développement...</p>
    </div>
  `,
  styleUrl: './supplier-dashboard.css',
})
export class SupplierDashboardComponent {

}
