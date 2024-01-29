export enum DynamicControlTypeEnum {
  INPUT_TEXT = 'input-text',
}

export enum IErrorAssociation {
  // Native Validation Error Identifiers
  REQUIRED = 'required',
  MINLENGTH = 'minlength',
  MAXLENGTH = 'maxlength',
  EMAIL = 'email',
  MIN = 'min',
  MAX = 'max',
  PATTERN = 'pattern',
  REQUIREDTRUE = 'requiredtrue',
  NULLVALIDATOR = 'nullvalidator',
  // Custom Validation Error Identifier
  UPPERCASE = 'uppercaseLetter',
}
