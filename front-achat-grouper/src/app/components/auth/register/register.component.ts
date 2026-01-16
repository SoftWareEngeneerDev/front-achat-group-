import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';
  acceptTerms = false;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  onSubmit(): void {
    if (!this.firstName || !this.lastName || !this.email || !this.password || !this.confirmPassword) {
      this.notificationService.showError('Veuillez remplir tous les champs');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.notificationService.showError('Les mots de passe ne correspondent pas');
      return;
    }

    if (!this.acceptTerms) {
      this.notificationService.showError('Veuillez accepter les conditions d\'utilisation');
      return;
    }

    this.isLoading = true;
    const userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      role: 'member'
    };

    this.authService.register(userData).subscribe({
      next: () => {
        this.notificationService.showSuccess('Inscription réussie ! Vous pouvez maintenant vous connecter');
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        this.notificationService.showError('Une erreur est survenue lors de l\'inscription');
        this.isLoading = false;
      }
    });
  }
}
