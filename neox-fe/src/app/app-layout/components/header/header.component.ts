import { NgIf } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '@team-link/helper';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
  selector: 'tl-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [UserMenuComponent, NgIf],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  isProfileMenuOpen = false;
  public themeService: ThemeService = inject(ThemeService);
  toggleProfileMenu(): void {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
}
