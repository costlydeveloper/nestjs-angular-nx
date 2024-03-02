import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { EMAIL_REGEXP, PASSWORD_REGEXP } from '@team-link/common';
import {
  DynamicControlTypeEnum,
  IDynamicFormControl,
  IErrorAssociation,
  InputType,
} from '@team-link/form-generator';

export interface ISignInForm {
  email: string;
  password: string;
}
@Injectable()
export class SignUpFormService {
  formGeneratorConfig: IDynamicFormControl[] = [
    {
      id: 'email',
      e2eId: 'email-input',
      label: {
        name: 'auth.label.email',
      },
      placeholder: 'auth.placeholder.email',
      titleAtt: 'auth.label.email',
      type: DynamicControlTypeEnum.INPUT_TEXT,
      controlConfig: {
        inputType: InputType.EMAIL,
      },
      validators: [
        {
          validator: Validators.required,
          errorAssociation: IErrorAssociation.REQUIRED,
        },
        {
          validator: Validators.pattern(EMAIL_REGEXP),
          errorAssociation: IErrorAssociation.PATTERN,
          errorMessage: 'auth.form.error.email.validation',
        },
      ],
    },
    {
      id: 'password',
      e2eId: 'password-input',
      label: {
        name: 'auth.label.password',
      },
      placeholder: 'auth.placeholder.password',
      titleAtt: 'auth.placeholder.password',
      type: DynamicControlTypeEnum.INPUT_TEXT,
      controlConfig: {
        inputType: InputType.PASSWORD,
      },
      validators: [
        {
          validator: Validators.required,
          errorAssociation: IErrorAssociation.REQUIRED,
        },
        {
          validator: Validators.pattern(PASSWORD_REGEXP),
          errorAssociation: IErrorAssociation.PATTERN,
          errorMessage: 'auth.form.error.password.validation',
        },
      ],
    },
  ];
}
