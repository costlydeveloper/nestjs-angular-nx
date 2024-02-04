export interface IFormCompactOutput<T = any> {
  value: T;
  status: FormControlStatus;
}

export enum FormControlStatus {
  VALID = 'VALID',
  INVALID = 'INVALID',
  PENDING = 'PENDING',
  DISABLED = 'DISABLED',
}
