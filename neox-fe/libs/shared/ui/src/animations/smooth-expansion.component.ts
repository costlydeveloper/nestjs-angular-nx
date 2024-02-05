import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'ui-smooth-expansion',
  standalone: true,
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: block;
        overflow: hidden;
      }
    `,
  ],
  animations: [
    trigger('expandCollapse', [
      transition('expand => collapse', [
        style({ height: '*' }),
        group([
          animate(
            '{{durationCollapse}}s ease',
            style({ height: 0, opacity: 0 }),
          ),
          query('@*', animateChild(), { optional: true }),
        ]),
      ]),
      transition('collapse => expand', [
        style({ height: 0, opacity: 0 }),
        group([
          animate(
            '{{durationExpand}}s ease',
            style({ height: '*', opacity: 1 }),
          ),
          query('@*', animateChild(), { optional: true }),
        ]),
      ]),
    ]),
  ],
})
export class SmoothExpansionComponent implements OnChanges {
  @Input() durationExpand = '.5';
  @Input() durationCollapse = '.2';
  @Input() active = true;
  @Input() expand: boolean | undefined;
  @Output() animDone = new EventEmitter<void>();
  @Output() animStart = new EventEmitter<void>();

  @HostBinding('@expandCollapse') expandCollapse!: any;

  constructor(private element: ElementRef) {}

  @HostListener('@expandCollapse.done') animationDone(): void {
    if (!this.expand) {
      // If the animation is finished and collapsed, set the height to 0
      this.element.nativeElement.style.height = '0';
    }
    this.animDone.emit();
  }

  @HostListener('@expandCollapse.start') animationStarted(): void {
    this.animStart.emit();
  }

  ngOnChanges(): void {
    if (this.active) {
      if (this.expand) {
        // Expand
        this.element.nativeElement.style.height = 'auto'; // Reset height before expand animation
        this.expandCollapse = {
          value: 'expand',
          params: { durationExpand: this.durationExpand },
        };
      } else {
        // Collapse
        this.expandCollapse = {
          value: 'collapse',
          params: { durationCollapse: this.durationCollapse },
        };
      }
    }
  }
}
