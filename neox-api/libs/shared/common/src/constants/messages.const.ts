export const MESSAGE = {
  VALIDATION: {
    WEAK_PASSWORD:
      'Password must include at least one digit, one uppercase letter, one lowercase letter, one special character, and cannot contain dots or newlines.',
    USERNAME_MUST_BE_EMAIL: 'The username should be email',
  },
  ERROR: {
    USERNAME_EXIST: 'Username already exists',
    UNSUPPORTED_DATABASE_TYPE: 'Unsupported database type',
    REFRESH_TOKEN_MALFORMED: 'Refresh token malformed',
    INVALID_UUID_FORMAT: 'Invalid UUID format',
    FOREIGN_KEY_VIOLATION:
      'Cannot delete the entity because it is referenced by another entity.',

    ENTITY_WITH_ID_DOES_NOT_EXIST: (id: string) =>
      `Entity with ID ${id} does not exist`,
    INVALID_CIPHER_FORMAT: 'Invalid cipher format',
    INVALID_HMAC: 'Invalid hmac',
    DATA_VERIFICATION_FAILED: 'Data verification failed',
  },
};
