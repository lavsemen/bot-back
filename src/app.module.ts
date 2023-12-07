import { Module } from '@nestjs/common';
import { TelegramModule } from './telegram/telegram.module';
import {ConfigModule} from "@nestjs/config";
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TelegramModule,
    BookingModule
  ],
})
export class AppModule {}
