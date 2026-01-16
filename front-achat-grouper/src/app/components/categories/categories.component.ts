import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
  description: string;
}

@Component({
  selector: 'app-categories',
  imports: [CommonModule, RouterModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  ngOnInit(): void {
    this.categories = [
      { id: '1', name: 'Informatique', icon: 'fas fa-laptop', productCount: 45, description: 'Ordinateurs, périphériques, accessoires' },
      { id: '2', name: 'Téléphonie', icon: 'fas fa-mobile-alt', productCount: 32, description: 'Smartphones, tablettes, accessoires' },
      { id: '3', name: 'Mode & Accessoires', icon: 'fas fa-tshirt', productCount: 67, description: 'Vêtements, chaussures, bijoux' },
      { id: '4', name: 'Maison & Cuisine', icon: 'fas fa-home', productCount: 89, description: 'Electroménager, décoration, ustensiles' },
      { id: '5', name: 'Électronique', icon: 'fas fa-tv', productCount: 54, description: 'TV, audio, consoles de jeux' },
      { id: '6', name: 'Sport & Loisirs', icon: 'fas fa-dumbbell', productCount: 41, description: 'Équipements sportifs, camping, fitness' }
    ];
  }
}