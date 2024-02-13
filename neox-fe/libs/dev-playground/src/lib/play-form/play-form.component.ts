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
    gap: 4,
    colSpan: [
      ['col-span-2', 'empty-1', 'col-span-4'],
      ['col-span-5', 'empty-2', 'col-span-5'],
    ],
  };
  formGeneratorConfig: IDynamicFormControl[] = [];
  constructor() {
    for (let i = 0; i <= 4; i++) {
      this.formGeneratorConfig.push({
        id: 'email' + i,
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
        ],
      });
    }
  }
}
