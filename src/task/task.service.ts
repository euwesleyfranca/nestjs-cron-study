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
    const services = [
      {
        id: '123456',
        name: 'Wesley Franca',
        service: 'Alignment',
        car: 'Ferrari',
        value: 1800,
      },
    ];

    if (services.length) {
      const result = services.map((services) => services.name);
      this.logger.debug(' There are new services scheduled, client: ' + result);
    } else {
      this.logger.debug(' Not new services scheduled!');
    }
  }
}
