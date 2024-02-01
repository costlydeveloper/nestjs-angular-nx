import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tl-playground',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet/>',
})
export class PlaygroundComponent {}
