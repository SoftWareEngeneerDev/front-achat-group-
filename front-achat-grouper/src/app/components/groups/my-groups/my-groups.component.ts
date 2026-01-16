import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-groups',
  imports: [CommonModule, RouterModule],
  templateUrl: './my-groups.html',
  styleUrl: './my-groups.css',
})
export class MyGroupsComponent {

  activeGroups = 0;
  completedGroups = 0;
  totalSavings = 0;

}
