import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import {
  DynamicControlTypeEnum,
  FormGeneratorComponent,
  IDynamicFormControl,
  IErrorAssociation,
  IFormLayout,
  InputType,
} from '@team-link/form-controls';

@Component({
  selector: 'tl-play-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormGeneratorComponent],
  templateUrl: './play-form.component.html',
  styleUrl: './play-form.component.scss',
})
export class PlayFormComponent {
  formLayout: IFormLayout = {
    girdCols: 12,
    gap: 5,
    colSpan: [[`col-span-2`, `col-span-9`]],
  };
  formGeneratorConfig: IDynamicFormControl[] = [
    {
      id: 'email',
      label: {
        name: 'Email',
      },
      placeholder: 'ss',
      titleAtt: 'title',
      type: DynamicControlTypeEnum.INPUT_TEXT,
      controlConfig: {
        inputType: InputType.EMAIL,
      },
      validators: [
        {
          validator: Validators.required,
          errorMessage: 'Field is required!',
          errorAssociation: IErrorAssociation.REQUIRED,
        },
        {
          validator: Validators.minLength(3),
          errorMessage: 'You need to select at least 3 movies',
          errorAssociation: IErrorAssociation.MINLENGTH,
        },
      ],
    },
    {
      id: 'email2',
      label: {
        name: 'Email',
      },
      placeholder: 'ss',
      titleAtt: 'title',
      type: DynamicControlTypeEnum.INPUT_TEXT,
      controlConfig: {
        inputType: InputType.EMAIL,
      },
      validators: [
        {
          validator: Validators.required,
          errorMessage: 'Field is required!',
          errorAssociation: IErrorAssociation.REQUIRED,
        },
        {
          validator: Validators.minLength(3),
          errorMessage: 'You need to select at least 3 movies',
          errorAssociation: IErrorAssociation.MINLENGTH,
        },
      ],
    },
  ];
}
