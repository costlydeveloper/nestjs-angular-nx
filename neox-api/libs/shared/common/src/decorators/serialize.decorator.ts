import { UseInterceptors } from '@nestjs/common';
import { SerializeInterceptor } from '../interceptors/serialize.interceptor';
import { ClassType } from '../types';

export function Serialize(dto: ClassType) {
  return UseInterceptors(new SerializeInterceptor(dto));
}
