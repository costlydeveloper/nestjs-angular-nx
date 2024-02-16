import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';
import { ButtonComponent } from '@team-link/button';
import { AuthenticationService } from '@team-link/security';

@Component({
  selector: 'tl-fetch-api',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslocoPipe],
  templateUrl: './fetch-api.component.html',
  styleUrl: './fetch-api.component.scss',
})
export class FetchApiComponent {
  private http = inject(HttpClient);
  private authenticationService = inject(AuthenticationService);
  clickMe() {
    const tokens = this.authenticationService.getTokensFromStorage();
    //console.log(tokens);
    this.http.get('http://localhost:3000/api/users').subscribe();
  }
}
