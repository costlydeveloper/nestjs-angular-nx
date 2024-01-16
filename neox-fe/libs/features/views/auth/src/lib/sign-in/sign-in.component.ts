import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';
import { APP_ROUTE, AUTH_ROUTE } from '@team-link/config';
import { AuthenticationService } from '@team-link/data-access-shared';

@Component({
  selector: 'auth-sign-in',
  standalone: true,
  imports: [CommonModule, TranslocoPipe, FormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  signUpRoute = ['/' + APP_ROUTE.AUTHENTICATION, AUTH_ROUTE.SIGN_UP];
  username = '';
  password = '';
  constructor(private userService: AuthenticationService) {}

  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
