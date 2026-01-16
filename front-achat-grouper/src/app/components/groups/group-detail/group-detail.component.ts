import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-group-detail',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container group-detail-page">
      <h1>Détail du groupe {{ groupId }}</h1>
      <p>Page en cours de développement...</p>
    </div>
  `,
  styles: [`
    .group-detail-page {
      padding: 40px 20px;
      text-align: center;
    }
  `]
})
export class GroupDetailComponent implements OnInit{
  groupId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.groupId = this.route.snapshot.params['id'];
  }

}
