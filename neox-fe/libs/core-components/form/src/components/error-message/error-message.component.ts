import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { IDynamicFormControl } from '../../dependencies';

@Component({
  selector: 'fc-error-message',
  templateUrl: './error-message.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class ErrorMessageComponent {
  @Input() formItem!: IDynamicFormControl;
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = this.rootFormGroup.control;
  }

  // This method is used to get the error message from the form control
  getValidationErrorMessage(field: IDynamicFormControl): string {
    const control = this.form.get(field.id); // Get the form control
    const errorKey = Object.keys(control!.errors || {})[0]; // Get the error key

    // Here we associate the form control error with the custom error
    const customError = field.validators?.find(
      (validatorError: { errorAssociation: string }) =>
        validatorError.errorAssociation === errorKey
    );

    return customError?.errorMessage || '';
  }
}
