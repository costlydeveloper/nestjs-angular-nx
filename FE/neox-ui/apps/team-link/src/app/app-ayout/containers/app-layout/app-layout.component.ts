import { Component, inject } from '@angular/core';
import { AuthenticationService } from '@neox-ui/data-access/shared';

@Component({
  selector: 'nxt-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent {
  authenticationService = inject(AuthenticationService);

  logout(): void {
    this.authenticationService.logout();
  }
}
