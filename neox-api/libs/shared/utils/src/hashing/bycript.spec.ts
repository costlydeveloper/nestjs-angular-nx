import * as bcrypt from 'bcrypt';
import { comparePasswords, hashIt } from './bcrypt';

describe('Hashing functions testing', () => {
  it('hashIt should correctly hash the password', () => {
    const rawPassword = 'testPassword';
    const hash = hashIt(rawPassword);

    expect(hash).not.toBe(rawPassword);
    expect(hash).toHaveLength(60);
  });

  it('comparePasswords should return true for matching passwords', () => {
    const rawPassword = 'testPassword';
    const hash = bcrypt.hashSync(rawPassword, bcrypt.genSaltSync());

    const result = comparePasswords(rawPassword, hash);

    expect(result).toBeTruthy();
  });

  it('comparePasswords should return false for non-matching passwords', () => {
    const rawPassword = 'testPassword';
    const wrongPassword = 'wrongPassword';
    const hash = bcrypt.hashSync(rawPassword, bcrypt.genSaltSync());

    const result = comparePasswords(wrongPassword, hash);

    expect(result).toBeFalsy();
  });
});
