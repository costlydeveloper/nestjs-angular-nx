import { Injectable } from '@angular/core';
import { environment } from '@team-link/config';
import { AES, enc, HmacSHA256, lib } from 'crypto-js';
import { MESSAGE } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class CryptographyService {
  #secret = environment.cryptographySecret;
  public encrypt(value: string, key: string = this.#secret): string {
    return AES.encrypt(value, key).toString();
  }

  public decrypt(text: string, key: string = this.#secret): string {
    const bytes = AES.decrypt(text, key);
    return bytes.toString(enc.Utf8);
  }

  public encryptWithRandomKey(text: string) {
    const secretKey = this.generateKey();
    const encrypted = this.encrypt(text, secretKey);
    const hmac = HmacSHA256(encrypted, secretKey).toString();
    return `${secretKey}.${hmac}.${encrypted}`;
  }

  public decryptWithKey(encryptedTextWithKey: string) {
    const [secretKey, hmac, encryptedText] = encryptedTextWithKey.split('.', 3);
    if (!secretKey || !encryptedText || !hmac) {
      throw new Error(MESSAGE.ERROR.INVALID_CIPHER_FORMAT);
    }
    const verifiedHmac = HmacSHA256(encryptedText, secretKey).toString();
    if (hmac !== verifiedHmac) {
      throw new Error(MESSAGE.ERROR.INVALID_HMAC);
    }
    return this.decrypt(encryptedText, secretKey);
  }

  private generateKey(): string {
    return lib.WordArray.random(128 / 8).toString(enc.Hex);
  }
}
