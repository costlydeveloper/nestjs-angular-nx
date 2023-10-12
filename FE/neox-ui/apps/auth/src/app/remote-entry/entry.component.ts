import { Component } from '@angular/core';
import { AuthenticationService } from '@neox-ui/data-access/shared';

@Component({
  selector: 'ox-auth-login-entry',
  templateUrl: 'entry.component.html',
})
export class RemoteEntryComponent {
  username = '';
  password = '';
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: AuthenticationService) {}

  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
