import { Component, inject, Input } from '@angular/core';
import { AuthenticationService } from '@neox-ui/data-access/shared';

@Component({
  selector: 'nxt-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent {
  @Input({ required: true }) isProfileMenuOpen!: boolean;
  authenticationService = inject(AuthenticationService);

  logout(): void {
    this.authenticationService.logout();
  }
}
