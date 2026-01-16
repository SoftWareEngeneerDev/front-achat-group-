import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-member-dashboard',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">Tableau de bord Membre</h1>
        <p class="page-subtitle">Gérez vos groupes et commandes</p>
      </div>
    </div>
    
    <div class="container dashboard-page">
      <div class="dashboard-grid">
        <div class="dashboard-card">
          <h3>Mes groupes actifs</h3>
          <p>Aucun groupe actif pour le moment</p>
        </div>
        <div class="dashboard-card">
          <h3>Mes commandes</h3>
          <p>Aucune commande pour le moment</p>
        </div>
        <div class="dashboard-card">
          <h3>Économies réalisées</h3>
          <p class="savings">0 FCFA</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-page {
      padding: 40px 20px;
    }
    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
    }
    .dashboard-card {
      background: white;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    .dashboard-card h3 {
      margin-bottom: 20px;
      color: #1f2937;
    }
    .savings {
      font-size: 28px;
      font-weight: 700;
      color: #10b981;
    }
  `]
})
export class MemberDashboardComponent {}
