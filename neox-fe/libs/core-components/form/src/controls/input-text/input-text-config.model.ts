import { IControlConfigTypes } from '../../dependencies';
import { InputType } from './input-text-config.enum';

export interface IInputTextConfig {
  inputType?: InputType;
}

export class InputTextConfig {
  inputType = InputType.TEXT;
  constructor(controlConfig: IControlConfigTypes) {
    Object.assign(this, controlConfig);
  }
}
