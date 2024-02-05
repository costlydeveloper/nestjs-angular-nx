import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Component, computed, LOCALE_ID } from '@angular/core';
import { TableFieldAbstractionDirective } from '../../dependencies/table-field-abstraction.directive';
import { INumberFieldConfig, NumberFieldConfig } from './number-config.model';

registerLocaleData(localeFr);
@Component({
  selector: 'field-number',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './number.component.html',
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
})
export class NumberComponent extends TableFieldAbstractionDirective<INumberFieldConfig> {
  config = computed<NumberFieldConfig>(() => {
    return new NumberFieldConfig(this.column()?.fieldConfig || {});
  });
  digitsInfo(): string {
    let response = '';
    if (this.config()) {
      response =
        this.config().minIntegerDigits +
        '.' +
        this.config().minFractionDigits +
        '-' +
        this.config().maxFractionDigits;
    }
    return response;
  }
  localeInfo(): string {
    return this.config()?.locale as string;
  }
}
