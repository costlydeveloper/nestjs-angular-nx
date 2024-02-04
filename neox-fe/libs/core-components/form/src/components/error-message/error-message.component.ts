import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { TranslocoPipe } from '@ngneat/transloco';
import { DEFAULT_ERROR_MESSAGE } from '../../config/default-error-messages';
import {
  IControlValidator,
  IDynamicFormControl,
  IErrorAssociation,
} from '../../dependencies';

@Component({
  selector: 'fc-error-message',
  templateUrl: './error-message.component.html',
  standalone: true,
  imports: [CommonModule, TranslocoPipe],
})
export class ErrorMessageComponent {
  @Input() formItem!: IDynamicFormControl;
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = this.rootFormGroup.control;
  }

  // This method is used to get the error message from the form control
  getValidationErrorMessage(field: IDynamicFormControl): string {
    if (!field.validators?.length) {
      return '';
    }
    const control = this.form.get(field.id); // Get the form control
    const errorKey = Object.keys(control!.errors || {})[0]; // Get the error key

    // Here we associate the form control error with the custom error
    let errorMessage = '';
    field.validators?.forEach((validator: IControlValidator) => {
      if (validator?.errorAssociation === errorKey) {
        if (validator?.errorMessage !== '') {
          errorMessage =
            validator?.errorMessage || this.mapDefaultMessage(errorKey);
        }
      }
    });

    return errorMessage || '';
  }

  mapDefaultMessage(errorKey: string) {
    let defaultMessage = '';
    switch (errorKey) {
      case IErrorAssociation.REQUIRED:
        defaultMessage = DEFAULT_ERROR_MESSAGE.REQUIRED;
        break;
    }

    return defaultMessage;
  }
}
