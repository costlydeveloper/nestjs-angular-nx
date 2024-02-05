import { Directive, input } from '@angular/core';
import { ITableGeneratorColumn } from './column.interface';

@Directive({
  selector: '[teamLinkFieldAbstraction]',
  standalone: true,
})
export abstract class TableFieldAbstractionDirective<T = any> {
  column = input.required<ITableGeneratorColumn<T>>();
  item = input.required<any>();
}
