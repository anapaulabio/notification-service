import { SendNotification } from '../../application/usecases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { NotificationsController } from './kafka/controller/notifications.controller';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationsController],
})
export class MessagingModule {}