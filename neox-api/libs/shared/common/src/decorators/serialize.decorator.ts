import { UseInterceptors } from '@nestjs/common';
import { SerializeInterceptor } from '../interceptors/serialize.interceptor';
import { IClassType } from '../types';

export function Serialize(dto: IClassType) {
  return UseInterceptors(new SerializeInterceptor(dto));
}
