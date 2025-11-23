import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MyLoggerService } from '../logger/my-logger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private logger: MyLoggerService) {
    this.logger.setContext('HTTP');
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url } = request;
    const now = Date.now();

    this.logger.log(`==> ${method}: ${url}`, 'HTTP');

    return next.handle().pipe(
      tap({
        next: () => {
          const response = context.switchToHttp().getResponse();
          const { statusCode } = response;
          const time = Date.now() - now;

          this.logger.log(`<== ${method} ${url} ${statusCode} ${time}ms`, 'HTTP');
        },
        error: (error) => {
          const time = Date.now() - now;
          const statusCode = error.status || 500;

          this.logger.error(
            `${method} ${url} ${statusCode} - ${time}ms - ${error.message}`,
            error.stack,
            'HTTP',
          );
        },
      }),
    );

  }

}