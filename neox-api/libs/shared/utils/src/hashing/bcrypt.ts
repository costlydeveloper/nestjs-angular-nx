import * as bcrypt from 'bcrypt';

export function hashIt(rawPassword: string): string {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(rawPassword, salt);
}

export function comparePasswords(rawPassword: string, hash: string): boolean {
  return bcrypt.compareSync(rawPassword, hash);
}
