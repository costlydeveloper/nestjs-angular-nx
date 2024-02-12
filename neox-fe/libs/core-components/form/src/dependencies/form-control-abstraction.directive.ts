import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { generateRandomString, Nullable } from '@team-link/utils';
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
  _config!: IDynamicFormControl<ConfigType>;
  @Input({ required: true })
  set config(val: IDynamicFormControl) {
    this.labelConfig = new Label({
      ...val.label,
      id: this.uniqueId,
      required: !!val.validators?.find(
        (validatorError) =>
          validatorError.errorAssociation === IErrorAssociation.REQUIRED,
      ),
    });
    // populate config with default values
    const baseConfig = new DynamicControlBase(val);
    if (val.controlConfig) {
      // get control config from derived class
      baseConfig.controlConfig = this.getControlConfig(val.controlConfig);
    }
    this._config = baseConfig;
  }

  get config(): IDynamicFormControl<ConfigType> {
    return this._config;
  }

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
