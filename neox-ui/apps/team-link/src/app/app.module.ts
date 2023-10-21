import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthApiModule } from '@neox-ui/data-access/auth';
import { SharedUtilsModule } from '@neox-ui/shared/utils';
import { HeaderComponent } from './app-layout/components/header/header.component';
import { SidebarComponent } from './app-layout/components/sidebar/sidebar.component';
import { UserMenuComponent } from './app-layout/components/user-menu/user-menu.component';
import { AppLayoutComponent } from './app-layout/containers/app-layout/app-layout.component';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    UserMenuComponent,
  ],
  imports: [
    BrowserModule,
    AuthApiModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    SharedUtilsModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
