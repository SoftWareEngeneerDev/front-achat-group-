import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from '../shared/product-card/product-card.component';
import { LoaderComponent } from '../shared/loader/loader.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product.model';
import { Group } from '../../models/group.model';


interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
}

interface ProductWithGroup {
  product: Product;
  group?: Group;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule,FormsModule,ProductCardComponent,ModalComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit{

  categories: Category[] = [];
  trendingProducts: ProductWithGroup[] = [];
  popularProducts: ProductWithGroup[] = [];
  isLoading = false;
  searchQuery = '';
  
  selectedProduct: ProductWithGroup | null = null;
  showProductModal = false;

  stats = {
    activeGroups: '5,247+',
    satisfiedMembers: '42,850+',
    totalSavings: '1.2M+',
    successRate: '98%'
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadHomeData();
  }

  loadHomeData(): void {
  this.categories = this.getMockCategories();
  this.trendingProducts = this.getMockProducts('trending');
  this.popularProducts = this.getMockProducts('popular');
  this.isLoading = false;
}

  onSearch(): void {
    if (this.searchQuery.trim()) {
      console.log('Recherche:', this.searchQuery);
      // Implémenter la logique de recherche
    }
  }

  onViewProductDetails(productId: string): void {
    const product = [...this.trendingProducts, ...this.popularProducts]
      .find(p => p.product.id === productId);
    
    if (product) {
      this.selectedProduct = product;
      this.showProductModal = true;
    }
  }

  onJoinGroup(productId: string): void {
    console.log('Rejoindre le groupe pour le produit:', productId);
    // Implémenter la logique pour rejoindre un groupe
  }

  closeProductModal(): void {
    this.showProductModal = false;
    this.selectedProduct = null;
  }

  // Données simulées
  private getMockCategories(): Category[] {
    return [
      { id: '1', name: 'Informatique', icon: 'fas fa-laptop', productCount: 45 },
      { id: '2', name: 'Téléphonie', icon: 'fas fa-mobile-alt', productCount: 32 },
      { id: '3', name: 'Mode & Accessoires', icon: 'fas fa-tshirt', productCount: 67 },
      { id: '4', name: 'Maison & Cuisine', icon: 'fas fa-home', productCount: 89 },
      { id: '5', name: 'Électronique', icon: 'fas fa-tv', productCount: 54 },
      { id: '6', name: 'Sport & Loisirs', icon: 'fas fa-dumbbell', productCount: 41 }
    ];
  }

  private getMockProducts(type: 'trending' | 'popular'): ProductWithGroup[] {
    const products: ProductWithGroup[] = [
      {
        product: {
          id: '1',
          name: 'Ordinateur Portable Gaming',
          description: 'PC portable haute performance avec RTX 4060, Intel i7, 16GB RAM',
          originalPrice: 200000,
          groupPrice: 175000,
          savings: 25000,
          imageUrl: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          categoryId: '1',
          supplierId: 'sup1',
          stock: 10,
          createdAt: new Date()
        },
        group: {
          id: 'g1',
          productId: '1',
          name: 'Groupe PC Gaming',
          currentMembers: 6,
          maxMembers: 10,
          minMembers: 5,
          status: 'active',
          endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
          createdBy: 'user1',
          members: [],
          createdAt: new Date()
        }
      },
      {
        product: {
          id: '2',
          name: 'Smartwatch Pro Max',
          description: 'Montre connectée avec GPS, moniteur de fréquence cardiaque',
          originalPrice: 75000,
          groupPrice: 56250,
          savings: 18750,
          imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          categoryId: '2',
          supplierId: 'sup2',
          stock: 15,
          createdAt: new Date()
        },
        group: {
          id: 'g2',
          productId: '2',
          name: 'Groupe Smartwatch',
          currentMembers: 12,
          maxMembers: 15,
          minMembers: 8,
          status: 'active',
          endDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
          createdBy: 'user2',
          members: [],
          createdAt: new Date()
        }
      },
      {
        product: {
          id: '3',
          name: 'Écouteurs Sans Fil Pro',
          description: 'Écouteurs Bluetooth avec annulation active de bruit',
          originalPrice: 45000,
          groupPrice: 27000,
          savings: 18000,
          imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          categoryId: '5',
          supplierId: 'sup3',
          stock: 20,
          createdAt: new Date()
        },
        group: {
          id: 'g3',
          productId: '3',
          name: 'Groupe Écouteurs',
          currentMembers: 8,
          maxMembers: 12,
          minMembers: 6,
          status: 'active',
          endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          createdBy: 'user3',
          members: [],
          createdAt: new Date()
        }
      }
    ];

    return type === 'trending' ? products : products.map((p, i) => ({
      ...p,
      product: { ...p.product, id: `${parseInt(p.product.id) + 3}` }
    }));
  }
  get modalTitle(): string {
  return this.selectedProduct?.product?.name || 'Détails du produit';
}

}
