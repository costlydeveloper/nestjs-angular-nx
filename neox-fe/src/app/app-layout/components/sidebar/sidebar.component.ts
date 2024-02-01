import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tl-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [RouterLink],
})
export class SidebarComponent {}
