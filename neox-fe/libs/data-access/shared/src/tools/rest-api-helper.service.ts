import { Injectable } from '@angular/core';
import { environmentGlobal } from '@team-link/config';

@Injectable({
  providedIn: 'root',
})
export class RestApiHelper {
  getApiUrl(): string {
    return environmentGlobal.apiServer;
  }
}
