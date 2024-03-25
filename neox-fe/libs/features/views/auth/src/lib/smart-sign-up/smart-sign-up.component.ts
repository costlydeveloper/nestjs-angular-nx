import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';
import { ButtonComponent } from '@team-link/button';
import { APP_ROUTE, AUTH_ROUTE } from '@team-link/common';
import {
  FormControlStatus,
  FormGeneratorComponent,
  IFormCompactOutput,
} from '@team-link/form-generator';
import { AuthenticationService } from '@team-link/security';
import { ISignInForm, SignUpFormService } from './sign-up-form.service';

@Component({
  selector: 'auth-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    FormGeneratorComponent,
    TranslocoPipe,
    RouterLink,
  ],
  providers: [SignUpFormService],
  templateUrl: './smart-sign-up.component.html',
})
export class SmartSignUpComponent {
  signInRoute = ['/' + APP_ROUTE.AUTHENTICATION, AUTH_ROUTE.SIGN_IN];

  private authenticationService = inject(AuthenticationService);
  public formService = inject(SignUpFormService);

  signUp(data: IFormCompactOutput<ISignInForm>) {
    if (data.status === FormControlStatus.VALID) {
      this.authenticationService.signUp(data.value.email, data.value.password);
    }
  }
}
