import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthApiModule } from '@neox-ui/data-access/auth';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthApiModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule,
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' },
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
