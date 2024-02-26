import { UseInterceptors } from '@nestjs/common';
import { SerializeInterceptor } from '../interceptors/serialize.interceptor';
import { ClassType } from '../types';

export function Serialize(vm: ClassType) {
  return UseInterceptors(new SerializeInterceptor(vm));
}

/*// DynamicSerializeInterceptor.ts
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DynamicSerializeInterceptor<T> implements NestInterceptor {
  constructor(private readonly viewModelClass: new (...args: any[]) => T) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next
      .handle()
      .pipe(
        map((data) =>
          plainToInstance(this.viewModelClass, data, {
            excludeExtraneousValues: true,
          }),
        ),
      );
  }
}

// Serialize decorator
export function Serialize<T>(
  viewModelClass: new (...args: any[]) => T,
): MethodDecorator {
  return UseInterceptors(new DynamicSerializeInterceptor(viewModelClass));
}*/
