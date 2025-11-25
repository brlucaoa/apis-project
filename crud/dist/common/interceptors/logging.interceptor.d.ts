import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MyLoggerService } from '../logger/my-logger.service';
import { MetricsService } from '../../metrics/metrics.service';
export declare class LoggingInterceptor implements NestInterceptor {
    private logger;
    private readonly metrics?;
    constructor(logger: MyLoggerService, metrics?: MetricsService | undefined);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
