import { ConsoleLogger } from '@nestjs/common';
export declare class MyLoggerService extends ConsoleLogger {
    log(message: string, context?: string): void;
    error(message: string, stack?: string, context?: string): void;
    warn(message: string, stack?: string, context?: string): void;
    debug(message: string, context?: string): void;
    verbose(message: string, context?: string): void;
}
