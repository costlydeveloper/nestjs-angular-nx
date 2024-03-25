import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'tl-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private http: HttpClient) {
    //this.loadUsers();
  }

  loadUsers(): any {
    this.http.get('http://localhost:3000/api/users').subscribe();
  }
}
