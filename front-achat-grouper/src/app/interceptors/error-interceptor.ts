import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const notificationService = inject(NotificationService);
  
  return next(req).pipe(
    catchError(error => {
      if (error.status === 401) {
        router.navigate(['/auth/login']);
        notificationService.showError('Session expirée. Veuillez vous reconnecter.');
      } else if (error.status === 403) {
        notificationService.showError('Accès refusé.');
        router.navigate(['/']);
      } else if (error.status === 500) {
        notificationService.showError('Erreur serveur. Veuillez réessayer plus tard.');
      }
      
      return throwError(() => error);
    })
  );
};