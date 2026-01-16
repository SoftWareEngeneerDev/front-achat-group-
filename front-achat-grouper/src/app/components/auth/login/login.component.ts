import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  email = '';
  password = '';
  rememberMe = false;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  onSubmit(): void {
    if (!this.email || !this.password) {
      this.notificationService.showError('Veuillez remplir tous les champs');
      return;
    }

    this.isLoading = true;
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.notificationService.showSuccess('Connexion réussie !');
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.notificationService.showError('Email ou mot de passe incorrect');
        this.isLoading = false;
      }
    });
  }
}
