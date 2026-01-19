// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './components/shared/toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    ToastComponent
  ],
  template: `
    <!-- Toast/Notifications globales -->
    <app-toast></app-toast>
    
    <!-- Contenu principal avec routing -->
    <router-outlet></router-outlet>
  `,
  styles: [`
    /* Styles globaux */
    :host {
      display: block;
      min-height: 100vh;
    }
    
    /* Styles pour les toasts */
    app-toast {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10000;
    }
  `]
})
export class AppComponent {
  title = 'Achat Groupé';
}