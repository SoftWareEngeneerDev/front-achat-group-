// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './components/shared/toast/toast.component';
import { LoaderComponent } from './components/shared/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    ToastComponent,
    LoaderComponent
  ],
  // TEMPLATE INLINE (pas de fichier .html séparé)
  template: `
    <!-- Toast/Notifications globales -->
    <app-toast></app-toast>
    
    <!-- Loader global -->
    <app-loader></app-loader>
    
    <!-- Contenu principal avec routing -->
    <router-outlet></router-outlet>
  `,
  styles: [`
    /* Styles globaux */
    :host {
      display: block;
      min-height: 100vh;
    }
    
    /* Styles pour le loader */
    app-loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
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