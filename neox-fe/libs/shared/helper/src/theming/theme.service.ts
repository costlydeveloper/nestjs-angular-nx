import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkEnable = true;
  currentTheme = 'dark';
  public renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  private applyTheme(theme: string) {
    this.renderer.addClass(document.documentElement, theme);
  }

  private removeTheme(theme: string) {
    this.renderer.removeClass(document.documentElement, theme);
  }

  changeTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.removeTheme(this.currentTheme);
    this.applyTheme(newTheme);
    this.currentTheme = newTheme;
    this.isDarkEnable = newTheme === 'dark';
  }
}
