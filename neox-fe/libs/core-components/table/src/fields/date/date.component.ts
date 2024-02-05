import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableFieldAbstractionDirective } from '../../dependencies/table-field-abstraction.directive';

@Component({
  selector: 'field-date',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date.component.html',
})
export class DateComponent extends TableFieldAbstractionDirective {}
