// default values
import { DYNAMIC_CONTROL_DEFAULT_VALUE } from '../config/dynamic-control-default-values';
import { IControlConfigTypes, IDynamicFormControl } from './index';

export class DynamicControlBase implements IDynamicFormControl {
  id = '';
  e2eId = '';
  type = DYNAMIC_CONTROL_DEFAULT_VALUE.TYPE;
  controlConfig: IControlConfigTypes = {};
  readonly = DYNAMIC_CONTROL_DEFAULT_VALUE.READONLY;
  disabled = DYNAMIC_CONTROL_DEFAULT_VALUE.DISABLED;
  placeholder = DYNAMIC_CONTROL_DEFAULT_VALUE.PLACEHOLDER;
  titleAtt = DYNAMIC_CONTROL_DEFAULT_VALUE.TITLE_ATT;
  value = DYNAMIC_CONTROL_DEFAULT_VALUE.VALUE;
  validators = [];
  constructor(config?: Partial<IDynamicFormControl>) {
    Object.assign(this, config);
  }
}
