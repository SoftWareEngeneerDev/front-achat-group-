import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-group-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">Groupes d'achat actifs</h1>
        <p class="page-subtitle">Rejoignez un groupe et économisez</p>
      </div>
    </div>
    
    <div class="container">
      <div class="groups-grid">
        <p class="no-groups">Groupes en cours de chargement...</p>
      </div>
    </div>
  `,
  styles: [`
    .groups-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 25px;
      padding: 40px 20px;
    }
    .no-groups {
      grid-column: 1 / -1;
      text-align: center;
      padding: 40px;
      color: #6b7280;
    }
  `]
})
export class GroupListComponent {}