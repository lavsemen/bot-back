import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import {GoogleSheetModule} from "../google-auth";
import { credentials } from '../../google-credentials'

@Module({
  imports: [
    GoogleSheetModule.register(credentials),
  ],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule {}
