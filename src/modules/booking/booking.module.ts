import { BookingsService } from './booking.service';
import { Module } from '@nestjs/common';
import { BookingsProviders } from './booking.provider';
import { BookingsController } from './booking.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [BookingsController],
    providers: [BookingsProviders, BookingsService],
    exports: [BookingsProviders, BookingsService]
  })
export class BookingModule {}
