import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LabelComponent } from '../../components/label/label.component';
import { IControlConfigTypes } from '../../dependencies';
import { FormControlAbstractionDirective } from '../../dependencies/form-control-abstraction.directive';

import { ValueAccessorDirective } from '../../dependencies/value-accessor.directive';
import { IInputTextConfig, InputTextConfig } from './input-text-config.model';

@Component({
  selector: 'fc-input-text',
  standalone: true,
  imports: [CommonModule, FormsModule, LabelComponent],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
  hostDirectives: [ValueAccessorDirective],
})
export class InputTextComponent extends FormControlAbstractionDirective<
  string,
  IInputTextConfig
> {
  constructor(valueAccessor: ValueAccessorDirective<string>) {
    super(valueAccessor);
  }

  override getControlConfig(
    controlConfig: IControlConfigTypes
  ): IInputTextConfig {
    return new InputTextConfig(controlConfig);
  }
}
