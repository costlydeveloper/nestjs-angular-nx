import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@neox-ui/data-access/shared';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'ox-tl-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  isLoggedIn$ = this.authenticationService.isUserLoggedIn$;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        // Queue the navigation after initialNavigation blocking is completed
        setTimeout(() => {
          if (!loggedIn) {
            this.router.navigateByUrl('auth');
          } else {
            this.router.navigateByUrl('');
          }
        });
      });
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
