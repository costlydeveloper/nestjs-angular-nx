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
} from '@team-link/form-generator';

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
        name: 'auth.label.email',
      },
      placeholder: 'auth.placeholder.email',
      titleAtt: 'auth.placeholder.email',
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
          validator: Validators.minLength(3),
          errorAssociation: IErrorAssociation.MINLENGTH,
        },
      ],
    },
  ];
}
