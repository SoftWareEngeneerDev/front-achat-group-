import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <h1>Tableau de bord Admin</h1>
      <p>Page en cours de développement...</p>
    </div>
  `,
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboardComponent {

}
