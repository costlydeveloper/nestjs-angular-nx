import {
  decryptWithKey,
  MESSAGE,
  PASSWORD_REGEXP,
} from '@neox-api/shared/common';
import { BadRequestException } from '@nestjs/common';

export function passwordHandler(
  encryptedPasswordWithKey: string,
  skipStrengthValidation = false,
) {
  let decryptedPassword;
  try {
    decryptedPassword = decryptWithKey(encryptedPasswordWithKey);
  } catch (error) {
    throw new BadRequestException(MESSAGE.ERROR.DATA_VERIFICATION_FAILED);
  }

  if (!skipStrengthValidation && !PASSWORD_REGEXP.test(decryptedPassword)) {
    throw new BadRequestException(MESSAGE.VALIDATION.WEAK_PASSWORD);
  }

  return decryptedPassword;
}
