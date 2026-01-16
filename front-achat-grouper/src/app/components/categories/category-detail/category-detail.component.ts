import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">{{ categoryName }}</h1>
        <p class="page-subtitle">{{ productsCount }} produits disponibles</p>
      </div>
    </div>
    
    <div class="container">
      <div class="products-grid">
        <!-- Les produits seront affichés ici -->
        <p class="no-products">Produits de la catégorie en cours de chargement...</p>
      </div>
    </div>
  `,
  styles: [`
    .page-header {
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      color: white;
      padding: 60px 0;
      text-align: center;
      margin-bottom: 50px;
      border-radius: 0 0 20px 20px;
    }
    
    .no-products {
      text-align: center;
      padding: 40px;
      color: #6b7280;
    }
  `]
})
export class CategoryDetailComponent implements OnInit {
  categoryId: string = '';
  categoryName: string = '';
  productsCount: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.params['id'];
    this.loadCategoryDetails();
  }

  loadCategoryDetails(): void {
    // Charger les détails de la catégorie
    this.categoryName = 'Informatique';
    this.productsCount = 45;
  }
}