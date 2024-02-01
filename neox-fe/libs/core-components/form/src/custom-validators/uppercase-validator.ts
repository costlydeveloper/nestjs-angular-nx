import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function uppercaseLetterValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const hasUppercaseLetter = /[A-Z]/.test(control.value as string);
    return hasUppercaseLetter
      ? /* Validation passes */
        null
      : /* Return an error object if validation fails */
        {
          uppercaseLetter: true,
        };
  };
}
