import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Inject, Optional } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MyLoggerService } from '../logger/my-logger.service';
import { MetricsService } from '../../metrics/metrics.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private logger: MyLoggerService,
              @Optional() @Inject(MetricsService) private readonly metrics?: MetricsService,
  ) {
    this.logger.setContext('HTTP');
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url } = request;
    const route = url.split('?')[0];
    const now = Date.now();

    this.logger.log(`=> ${method} ${url}`, 'HTTP');

    let timer: (() => number ) | null = null;
    if (this.metrics) {
      timer =  this.metrics.httpRequestDuration.startTimer({
        method,
        route,
      });
    }

    return next.handle().pipe(
      tap({
        next: () => {
          const response = context.switchToHttp().getResponse();
          const { statusCode } = response;
          const time = Date.now() - now;

          if (this.metrics) {
            this.metrics.httpRequestCounter.inc({
              method,
              route,
              status: statusCode,
            });
            if (timer) timer();
          }

          this.logger.log(`<=> ${method} ${url} ${statusCode} - ${time}  `, 'HTTP');
        },

        error: (error) => {
          const time = Date.now() - now;
          const statusCode = error.statusCode || 500;

          if (this.metrics) {
            if (timer) timer();
            this.metrics.httpRequestCounter.inc({
              method,
              route,
              status: statusCode,
            });
          }

          this.logger.error(
            `${method} ${url} ${statusCode} - ${time}  ${error.message}`, 'HTTP',
          );
        },
      }),
    );
  }
}