import { Injectable, ConsoleLogger } from '@nestjs/common';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  log(message: string, context?: string) {
    super.log(message, context || this.context || 'Application');
  }

  error(message: string, stack?: string, context?: string) {
    super.error(message, context || this.context || 'Application');
  }

  warn(message: string, stack?: string, context?: string) {
    super.warn(message, context || this.context || 'Application');
  }

  debug(message: string, context?: string) {
    super.debug(message, context || this.context || 'Application');
  }

  verbose(message: string, context?: string) {
    super.verbose(message, context || this.context || 'Application');
  }
}