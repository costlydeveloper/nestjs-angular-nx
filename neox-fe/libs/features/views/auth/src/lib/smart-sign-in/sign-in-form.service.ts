import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
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
export class SignInFormService {
  formGeneratorConfig: IDynamicFormControl[] = [
    {
      id: 'email',
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
      ],
    },
    {
      id: 'password',
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
      ],
    },
  ];
}
