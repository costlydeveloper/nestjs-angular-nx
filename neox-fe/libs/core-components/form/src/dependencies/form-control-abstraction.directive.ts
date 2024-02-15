import { Directive, EventEmitter, input, Output } from '@angular/core';
import { Nullable } from '@team-link/common';
import { generateRandomString } from '@team-link/utils';
import { ILabel, Label } from '../components/label/label.model';
import { DynamicControlBase } from './dynamic-control-base.model';
import { IErrorAssociation } from './dynamic-form-control.enum';
import { IDynamicFormControl } from './dynamic-form-control.interface';
import { ValueAccessorDirective } from './value-accessor.directive';

@Directive({
  selector: '[formCtrlAbstraction]',
  standalone: true,
})
export abstract class FormControlAbstractionDirective<ValueType, ConfigType> {
  // region *** Helper ***
  config = input.required<IDynamicFormControl<ConfigType>, IDynamicFormControl>(
    {
      transform: (value) => {
        this.labelConfig = new Label({
          ...value.label,
          id: this.uniqueId,
          required: !!value.validators?.find(
            (validatorError) =>
              validatorError.errorAssociation === IErrorAssociation.REQUIRED,
          ),
        });
        const baseConfig = new DynamicControlBase(value);
        if (value.controlConfig) {
          // get control config from derived class
          baseConfig.controlConfig = this.getControlConfig(value.controlConfig);
        }
        return baseConfig;
      },
    },
  );

  uniqueId = generateRandomString();
  labelConfig!: ILabel;
  // endregion

  // region *** Form ***
  focused: Nullable<boolean>;
  value: any;
  @Output() onFocus: EventEmitter<Event> = new EventEmitter<Event>();
  valueAccessor!: ValueAccessorDirective<ValueType>;
  // endregion

  protected constructor(valueAccessor: ValueAccessorDirective<ValueType>) {
    this.valueAccessor = valueAccessor;
    this.valueAccessor.value.subscribe((v) => (this.value = v));
  }

  abstract getControlConfig(val: IDynamicFormControl): ConfigType;

  onControlFocus() {
    this.focused = true;
    this.valueAccessor.touchedChange(true);
  }
  onControlBlur() {
    this.focused = false;
    this.valueAccessor.touchedChange(true);
  }

  onControlChange(event: any): void {
    const newValue = event.target.value;
    this.valueAccessor.writeValue(newValue);
    this.valueAccessor.valueChange(this.value);
    this.valueAccessor.touchedChange(true);
  }
}
