import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@neox-ui/data-access/shared';
import { fadeAnimation } from '@neox-ui/shared/utils';
import { APP_ROUTE } from '@neox-ui/team-link/shared';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'nxt-root',
  templateUrl: 'app.component.html',
  animations: [fadeAnimation],
})
export class AppComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.authenticationService.isUserLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        // Queue the navigation after initialNavigation blocking is completed
        setTimeout(() => {
          if (!loggedIn) {
            this.router.navigateByUrl(APP_ROUTE.AUTHENTICATION);
          } else {
            this.router.navigateByUrl('');
          }
        });
      });
  }
}
