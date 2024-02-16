import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { environment } from '@team-link/config';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { InputTextComponent } from '../../controls/input-text/input-text.component';
import {
  DynamicControlTypeEnum,
  IDynamicFormControl,
} from '../../dependencies';

@Component({
  selector: 'fc-dynamic-form-control',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './dynamic-form-control.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormControlComponent {
  // region *** Debug ***
  debug = input<boolean, boolean>(false, {
    transform: (value: boolean) => (environment.production ? false : value),
  });
  // endregion
  dynamicFormControl = input.required<IDynamicFormControl>();

  form!: FormGroup;
  formControlTypeEnum = DynamicControlTypeEnum;
  private rootFormGroup = inject(FormGroupDirective);
  constructor() {
    this.form = this.rootFormGroup.control;
  }
}
