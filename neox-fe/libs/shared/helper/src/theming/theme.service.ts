import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { WINDOW } from '@team-link/utils';

type ThemeType = 'light' | 'dark';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkEnable = true;
  currentTheme: ThemeType = 'dark';
  private renderer: Renderer2;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.changeTheme(this.getSystemDefaultTheme());
  }

  private applyTheme(theme: string) {
    this.renderer.addClass(this.document.documentElement, theme);
  }

  private removeTheme(theme: string) {
    this.renderer.removeClass(this.document.documentElement, theme);
  }

  private getSystemDefaultTheme(): ThemeType {
    const prefersDarkMode =
      this.window.matchMedia &&
      this.window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDarkMode ? 'dark' : 'light';
  }

  changeTheme(theme?: ThemeType) {
    const newTheme =
      theme ?? (this.currentTheme === 'light' ? 'dark' : 'light');

    this.removeTheme(this.currentTheme);
    this.applyTheme(newTheme);
    this.currentTheme = newTheme;
    this.isDarkEnable = newTheme === 'dark';
  }
}
