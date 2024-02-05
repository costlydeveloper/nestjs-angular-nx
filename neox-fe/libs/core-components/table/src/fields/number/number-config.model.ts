import { FIELD_NUMBER } from '../../config/field-number.constant';

export interface INumberFieldConfig {
  minIntegerDigits: string;
  minFractionDigits: string;
  maxFractionDigits: string;
  locale?: 'fr-FR' | 'en-US';
}

export class NumberFieldConfig implements INumberFieldConfig {
  minIntegerDigits = FIELD_NUMBER.minIntegerDigits;
  minFractionDigits = FIELD_NUMBER.minFractionDigits;
  maxFractionDigits = FIELD_NUMBER.maxFractionDigits;
  locale = FIELD_NUMBER.locale;
  constructor(filedConfig: object) {
    Object.assign(this, filedConfig);
  }
}
