import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthApiModule } from '@neox-ui/data-access/auth';
import { SharedUtilsModule } from '@neox-ui/shared/utils';
import { AppLayoutComponent } from './app-ayout/containers/app-layout/app-layout.component';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent, AppLayoutComponent],
  imports: [
    BrowserModule,
    AuthApiModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    SharedUtilsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
