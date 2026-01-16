import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPasswordComponent {
  email = '';
  isLoading = false;
  emailSent = false;

  constructor(private notificationService: NotificationService) {}

  onSubmit(): void {
    if (!this.email) {
      this.notificationService.showError('Veuillez entrer votre email');
      return;
    }

    this.isLoading = true;
    // Simuler l'envoi d'email
    setTimeout(() => {
      this.isLoading = false;
      this.emailSent = true;
      this.notificationService.showSuccess('Un email de réinitialisation a été envoyé');
    }, 1500);
  }
}
