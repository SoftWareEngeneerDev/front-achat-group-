import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Group } from '../../../models/group.model';

@Component({
  selector: 'app-group-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './group-card.html',
  styleUrl: './group-card.css',
})
export class GroupCardComponent {

@Input() group!: Group;
  @Output() join = new EventEmitter<string>();

  onJoin(): void {
    this.join.emit(this.group.id);
  }

  getProgress(): number {
    return Math.round((this.group.currentMembers / this.group.maxMembers) * 100);
  }

}
