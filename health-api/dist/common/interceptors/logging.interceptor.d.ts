import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MyLoggerService } from '../logger/my-logger.service';
export declare class LoggingInterceptor implements NestInterceptor {
    private logger;
    constructor(logger: MyLoggerService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
