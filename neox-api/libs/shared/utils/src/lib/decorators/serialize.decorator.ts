import { UseInterceptors } from '@nestjs/common';
import { IClassType } from '../helper-types';
import { SerializeInterceptor } from '../interceptors/serialize.interceptor';

export function Serialize(dto: IClassType) {
  return UseInterceptors(new SerializeInterceptor(dto));
}
