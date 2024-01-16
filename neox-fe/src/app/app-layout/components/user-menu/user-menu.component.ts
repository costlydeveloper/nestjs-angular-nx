import { NgClass } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';
import { AuthenticationService } from '@team-link/data-access-shared';

@Component({
  selector: 'nxt-user-menu',
  standalone: true,
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  imports: [NgClass, TranslocoPipe],
})
export class UserMenuComponent {
  @Input({ required: true }) isProfileMenuOpen!: boolean;
  authenticationService = inject(AuthenticationService);

  logout(): void {
    this.authenticationService.logout();
  }
}
