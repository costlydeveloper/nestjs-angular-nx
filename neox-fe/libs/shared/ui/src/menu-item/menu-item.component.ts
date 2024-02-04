import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';
import { IMenuItem } from './menu-item.model';

@Component({
  selector: 'ui-menu-item',
  standalone: true,
  imports: [CommonModule, TranslocoPipe, RouterLink, RouterLinkActive],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  @Input({ required: true }) menuItem!: IMenuItem;
  @ViewChild('itemRla', { static: true }) itemRla!: RouterLinkActive;

  menuType = (item: IMenuItem): IMenuItem => item;
}
