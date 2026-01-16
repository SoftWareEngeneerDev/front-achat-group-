import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../../models/product.model';
import { Group } from '../../../models/group.model';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent {

  @Input() product!: Product;
  @Input() group?: Group;
  @Output() viewDetails = new EventEmitter<string>();
  @Output() joinGroup = new EventEmitter<string>();

  onViewDetails(): void {
    this.viewDetails.emit(this.product.id);
  }

  onJoinGroup(): void {
    this.joinGroup.emit(this.product.id);
  }

  getProgress(): number {
    if (!this.group) return 0;
    return Math.round((this.group.currentMembers / this.group.maxMembers) * 100);
  }

  getTimeLeft(): string {
    if (!this.group) return '';
    const now = new Date();
    const end = new Date(this.group.endDate);
    const diff = end.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days > 1) return `${days} jours restants`;
    if (days === 1) return '1 jour restant';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    return `${hours} heures restantes`;
  }

  getSavingsPercent(): number {
    return Math.round((this.product.savings / this.product.originalPrice) * 100);
  }

}
