import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService, AppNotification } from '../../../services/notification.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container">
      <div *ngFor="let notification of notifications" 
           class="toast" 
           [class]="'toast-' + notification.type"
           [@slideInOut]>
        <div class="toast-icon">
          <span *ngIf="notification.type === 'success'">✓</span>
          <span *ngIf="notification.type === 'error'">✗</span>
          <span *ngIf="notification.type === 'info'">ℹ</span>
          <span *ngIf="notification.type === 'warning'">⚠</span>
        </div>
        <div class="toast-content">
          <span class="toast-message">{{ notification.message }}</span>
        </div>
        <button class="toast-close" (click)="removeNotification(notification)">
          &times;
        </button>
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 80px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    
    .toast {
      background: white;
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 300px;
      max-width: 400px;
      animation: slideIn 0.3s ease-out;
      border-left: 4px solid;
    }
    
    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
    
    .toast-success { 
      border-left-color: #10b981; 
      background-color: #f0fdf4;
    }
    
    .toast-error { 
      border-left-color: #ef4444; 
      background-color: #fef2f2;
    }
    
    .toast-info { 
      border-left-color: #3b82f6; 
      background-color: #eff6ff;
    }
    
    .toast-warning { 
      border-left-color: #f59e0b; 
      background-color: #fffbeb;
    }
    
    .toast-icon {
      font-size: 18px;
      font-weight: bold;
    }
    
    .toast-success .toast-icon { color: #10b981; }
    .toast-error .toast-icon { color: #ef4444; }
    .toast-info .toast-icon { color: #3b82f6; }
    .toast-warning .toast-icon { color: #f59e0b; }
    
    .toast-content {
      flex: 1;
    }
    
    .toast-message {
      font-size: 14px;
      color: #374151;
    }
    
    .toast-close {
      background: none;
      border: none;
      color: #9ca3af;
      font-size: 20px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
    }
    
    .toast-close:hover {
      background-color: #f3f4f6;
      color: #374151;
    }
    
    .toast-exit {
      animation: slideOut 0.3s ease-in forwards;
    }
  `]
})
export class ToastComponent implements OnInit {
  notifications: AppNotification[] = []; // ✅ Correction : AppNotification[] au lieu de Notification[]

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notification$.subscribe(notification => {
      this.addNotification(notification);
    });
  }

  addNotification(notification: AppNotification): void {
    this.notifications.push(notification);
    
    // Auto-remove après la durée spécifiée
    setTimeout(() => {
      this.removeNotification(notification);
    }, notification.duration || 3000);
  }

  removeNotification(notification: AppNotification): void {
    const index = this.notifications.indexOf(notification);
    if (index > -1) {
      this.notifications.splice(index, 1);
    }
  }
}