import { OnModuleInit } from '@nestjs/common';
import { Counter, Histogram } from 'prom-client';
import { MyLoggerService } from '../common/logger/my-logger.service';
export declare class MetricsService implements OnModuleInit {
    private readonly logger;
    private readonly registry;
    readonly httpRequestCounter: Counter;
    readonly httpRequestDuration: Histogram;
    constructor(logger: MyLoggerService);
    onModuleInit(): void;
    getMetrics(): Promise<string>;
}
