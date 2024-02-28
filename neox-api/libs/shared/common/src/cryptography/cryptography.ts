import { AES, enc, HmacSHA256, lib } from 'crypto-js';
import { MESSAGE } from '../index';

function generateKey(): string {
  return lib.WordArray.random(128 / 8).toString(enc.Hex);
}

function encrypt(text: string, secretKey: string): string {
  return AES.encrypt(text, secretKey).toString();
}

function decrypt(encryptedText: string, secretKey: string): string {
  const bytes = AES.decrypt(encryptedText, secretKey);
  return bytes.toString(enc.Utf8);
}

export function encryptWithRandomKey(text: string): string {
  const secretKey = generateKey();
  const encrypted = encrypt(text, secretKey);
  const hmac = HmacSHA256(encrypted, secretKey).toString();
  return `${secretKey}.${hmac}.${encrypted}`;
}

export function decryptWithKey(encryptedTextWithKey: string): string {
  const [secretKey, hmac, encryptedText] = encryptedTextWithKey.split('.', 3);
  if (!secretKey || !encryptedText || !hmac) {
    throw new Error(MESSAGE.ERROR.INVALID_CIPHER_FORMAT);
  }
  const verifiedHmac = HmacSHA256(encryptedText, secretKey).toString();
  if (hmac !== verifiedHmac) {
    throw new Error(MESSAGE.ERROR.INVALID_HMAC);
  }
  return decrypt(encryptedText, secretKey);
}
