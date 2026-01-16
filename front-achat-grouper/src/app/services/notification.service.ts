import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface AppNotification {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationSubject = new Subject<AppNotification>();
  public notification$ = this.notificationSubject.asObservable();

  showSuccess(message: string, duration: number = 3000): void {
    this.show({ type: 'success', message, duration });
  }

  showError(message: string, duration: number = 5000): void {
    this.show({ type: 'error', message, duration });
  }

  showInfo(message: string, duration: number = 3000): void {
    this.show({ type: 'info', message, duration });
  }

  showWarning(message: string, duration: number = 4000): void {
    this.show({ type: 'warning', message, duration });
  }

  private show(notification: AppNotification): void {
    this.notificationSubject.next(notification);
  }
}
