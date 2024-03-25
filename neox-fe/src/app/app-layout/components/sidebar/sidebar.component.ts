import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';
import { APP_ROUTE } from '@team-link/common';
import { environment } from '@team-link/config';
import { setDevMenuItems } from '@team-link/dev-playground';
import { IMenuItem, MenuItem, MenuItemComponent } from '@team-link/ui';

@Component({
  selector: 'tl-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    TranslocoPipe,
    NgClass,
    MenuItemComponent,
  ],
})
export class SidebarComponent {
  menuItems: IMenuItem[] = [
    this.getDashboardItem(),
    ...(environment.production ? [] : setDevMenuItems()),
  ];

  menuType = (item: IMenuItem): IMenuItem => item;
  getDashboardItem(): IMenuItem {
    return new MenuItem('app.menu.dashboard', true, APP_ROUTE.DASHBOARD);
  }
}
