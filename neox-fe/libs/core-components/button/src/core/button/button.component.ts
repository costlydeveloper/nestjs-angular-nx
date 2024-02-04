import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';
import { ButtonType } from '../../dependencies/button.type';

@Component({
  selector: 'x-button',
  standalone: true,
  imports: [CommonModule, TranslocoPipe],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Output() buttonClick: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();

  @Input() disabled = false;
  @Input() cssClass = '';
  @Input() textAlign: 'left' | 'right' | 'center' = 'center';
  @Input() buttonType: ButtonType = 'main-btn';

  get buildButtonCssString(): string {
    let css =
      'my-4 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ';

    if (this.cssClass) {
      css += this.cssClass;
      css += ' ';
    }
    if (this.textAlign) {
      css += 'text-align-' + this.textAlign;
      css += ' ';
    }
    if (this.buttonType) {
      css += this.buttonType;
      css += ' ';
    }
    return css;
  }
}
