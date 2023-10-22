import { Injectable } from '@angular/core';
import { environmentGlobal } from '@neox-ui/platform';

@Injectable({
  providedIn: 'root',
})
export class RestApiHelper {
  getApiUrl(): string {
    return environmentGlobal.apiServer;
  }
}
