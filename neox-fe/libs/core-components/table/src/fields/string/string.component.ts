import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableFieldAbstractionDirective } from '../../dependencies/table-field-abstraction.directive';

@Component({
  selector: 'field-string',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './string.component.html',
})
export class StringComponent extends TableFieldAbstractionDirective {}
