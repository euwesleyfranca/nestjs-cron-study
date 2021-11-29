import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  @Cron(CronExpression.EVERY_SECOND, {
    name: 'TaskService',
    timeZone: 'Europe/Paris',
  })
  handleCron() {
    this.logger.debug('Executando a cron Task a cada 1s ');
  }
}
