import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { Observable, tap } from 'rxjs';

/**
 * This interceptor is designed to log detailed information about each incoming HTTP request and its response.
 * It captures the HTTP method, request URL, response status code, and the time taken to process the request.
 * This data is logged after the request has been processed, providing insights into the performance and behavior
 * of the application's endpoints. It's a valuable tool for monitoring API health and optimizing response times.
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: PinoLogger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest();
    return next
      .handle()
      .pipe(
        tap(() =>
          this.logger.warn(
            `Request to ${request.url} took ${Date.now() - now}ms`,
          ),
        ),
      );
  }
}
