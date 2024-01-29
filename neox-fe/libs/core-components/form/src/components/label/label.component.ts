import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ILabel } from './label.model';

@Component({
  selector: 'fc-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './label.component.html',
})
export class LabelComponent {
  @Input({ required: true }) config!: ILabel;
}
