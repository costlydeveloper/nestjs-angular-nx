import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';
import { ILabel } from './label.model';

@Component({
  selector: 'fc-label',
  standalone: true,
  imports: [CommonModule, TranslocoPipe],
  templateUrl: './label.component.html',
})
export class LabelComponent {
  config = input.required<ILabel>();
}
