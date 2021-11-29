import { Injectable, Logger } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
@Injectable()
export class TaskService {
  constructor(private schedulerRegistry: SchedulerRegistry) {}
  private readonly logger = new Logger(TaskService.name);

  @Cron('5 * * * * *')
  addCronJob(name: string, seconds: string) {
    name = 'William';
    seconds = '5';

    const job = new CronJob(`${seconds} * * * * *`, () => {
      this.logger.warn(`time (${seconds}) for job ${name} to run!`);
    });

    this.schedulerRegistry.addCronJob(name, job);
    job.start();

    this.logger.warn(
      `job ${name} added for each minute at ${seconds} seconds!`,
    );
  }

  @Cron('10 * * * * *')
  deleteCron(name: string) {
    name = 'William';
    this.schedulerRegistry.deleteCronJob(name);
    this.logger.warn(`job ${name} deleted!`);
  }
}
