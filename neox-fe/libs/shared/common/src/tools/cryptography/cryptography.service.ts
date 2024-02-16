import { Injectable } from '@angular/core';
import { environment } from '@team-link/config';
import { AES, enc } from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class CryptographyService {
  #secret = environment.cryptographySecret;
  public encrypt(value: string): string {
    return AES.encrypt(value, this.#secret).toString();
  }

  public decrypt(text: string): string {
    const bytes = AES.decrypt(text, this.#secret);
    return bytes.toString(enc.Utf8);
  }
}
