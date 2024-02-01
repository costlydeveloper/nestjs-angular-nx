import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { environmentGlobal } from '@team-link/config';
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
  _debug = false;
  @Input({ required: false })
  set debug(val: boolean) {
    if (environmentGlobal.production) {
      this._debug = false;
    } else {
      this._debug = val;
    }
  }
  get debug() {
    return this._debug;
  }
  @Input({ required: true }) dynamicFormControl!: IDynamicFormControl;
  form!: FormGroup;
  formControlTypeEnum = DynamicControlTypeEnum;

  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = this.rootFormGroup.control;
  }
}
