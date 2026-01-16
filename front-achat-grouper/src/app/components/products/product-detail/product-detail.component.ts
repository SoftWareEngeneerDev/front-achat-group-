import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container product-detail-page">
      <h1>Détail du produit {{ productId }}</h1>
      <p>Page en cours de développement...</p>
    </div>
  `,
  styles: [`
    .product-detail-page {
      padding: 40px 20px;
      text-align: center;
    }
  `]
})
export class ProductDetailComponent implements OnInit {
  productId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
  }
}
