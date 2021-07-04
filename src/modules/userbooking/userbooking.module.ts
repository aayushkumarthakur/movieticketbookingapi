import { Module } from '@nestjs/common';
import { BookingModule } from './../booking/booking.module';
import { UserModule } from './../user/user.module';
import { UserbookingsService } from './userbooking.service';
import { UserbookingsProviders } from './userbooking.provider';
import { UserbookingsController } from './userbooking.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
    controllers: [UserbookingsController],
    imports: [DatabaseModule,BookingModule,UserModule],
    providers: [UserbookingsProviders, UserbookingsService],
    exports: [UserbookingsProviders, UserbookingsService],
  })
export class UserbookingModule {}
