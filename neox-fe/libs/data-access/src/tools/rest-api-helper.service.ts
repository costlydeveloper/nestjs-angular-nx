import { Injectable } from '@angular/core';
import { environment } from '@team-link/config';

@Injectable({
  providedIn: 'root',
})
export class RestApiHelper {
  getApiUrl(): string {
    return environment.apiServer;
  }
  apiEntityUrlBuilder(endpointName: string): string {
    return `${environment.apiServer}/${endpointName}`;
  }
}
