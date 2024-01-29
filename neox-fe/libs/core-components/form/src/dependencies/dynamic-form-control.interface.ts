import { ValidatorFn } from '@angular/forms';
import { ILabel } from '../components/label/label.model';
import { IInputTextConfig } from '../controls/input-text/input-text-config.model';
import {
  DynamicControlTypeEnum,
  IErrorAssociation,
} from './dynamic-form-control.enum';

export type IControlConfigTypes = any | IInputTextConfig;

export interface IDynamicFormControl<ControlType = IControlConfigTypes> {
  id: string;
  label?: Omit<ILabel, 'id'>;
  type: DynamicControlTypeEnum;
  controlConfig?: ControlType;
  readonly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  titleAtt?: string;
  value?: string;
  validators?: IControlValidator[];
}

export interface IControlValidator {
  validator: ValidatorFn;
  errorMessage?: string;
  errorAssociation: IErrorAssociation;
}
