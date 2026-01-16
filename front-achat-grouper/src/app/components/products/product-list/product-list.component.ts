import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent implements OnInit {
  selectedCategory = 'Tous';
  selectedPriceRange = 'Tous';

  categories = ['Tous', 'Informatique', 'Téléphonie', 'Mode', 'Maison', 'Électronique'];
  priceRanges = ['Tous', 'Moins de 50k FCFA', '50k - 100k FCFA', '100k - 200k FCFA', 'Plus de 200k FCFA'];

  ngOnInit(): void {
    // Charger les produits
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  selectPriceRange(range: string): void {
    this.selectedPriceRange = range;
  }
}