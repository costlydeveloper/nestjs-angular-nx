import { inject, Injectable } from '@angular/core';
import { CryptographyService } from '../../cryptography';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public crypto = inject(CryptographyService);

  public setItem(key: string, value: string | object): void {
    let encryptedValue;
    if (typeof value === 'object') {
      encryptedValue = this.crypto.encrypt(JSON.stringify(value));
    } else {
      encryptedValue = this.crypto.encrypt(value);
    }
    localStorage.setItem(key, encryptedValue);
  }

  public removeItem(key: string) {
    return localStorage.removeItem(key);
  }

  public getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);

    try {
      return item ? (JSON.parse(this.crypto.decrypt(item)) as T) : null;
    } catch {
      return item ? (this.crypto.decrypt(item) as T) : null;
    }
  }
}
