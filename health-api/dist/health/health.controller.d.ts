import { HealthCheckService, MemoryHealthIndicator, DiskHealthIndicator } from '@nestjs/terminus';
import { MyLoggerService } from '../common/logger/my-logger.service';
export declare class HealthController {
    private health;
    private memory;
    private disk;
    private logger;
    constructor(health: HealthCheckService, memory: MemoryHealthIndicator, disk: DiskHealthIndicator, logger: MyLoggerService);
    check(): Promise<import("@nestjs/terminus").HealthCheckResult>;
    liveness(): Promise<import("@nestjs/terminus").HealthCheckResult>;
    readiness(): Promise<import("@nestjs/terminus").HealthCheckResult>;
}
