import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskModule } from './task/task.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [ScheduleModule.forRoot(), TaskModule, NotificationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
