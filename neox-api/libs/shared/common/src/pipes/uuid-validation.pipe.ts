import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { MESSAGE, UUID_REGEXP } from '../constants';

@Injectable()
export class UuidValidationPipe implements PipeTransform<string> {
  transform(value: string): string {
    if (!UUID_REGEXP.test(value)) {
      throw new BadRequestException(MESSAGE.ERROR.INVALID_UUID_FORMAT);
    }
    return value;
  }
}
