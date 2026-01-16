import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="container search-page">
      <h1>Recherche</h1>
      <input type="text" [(ngModel)]="searchQuery" placeholder="Rechercher...">
      <p>Résultats pour: {{ searchQuery }}</p>
    </div>
  `,
  styles: [`
    .search-page {
      padding: 40px 20px;
    }
  `]
})
export class SearchComponent {
  searchQuery = '';
}