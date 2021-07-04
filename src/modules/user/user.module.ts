import { BookingModule } from './../booking/booking.module';
import { UsersService } from './user.service';
import { Module } from '@nestjs/common';
import { UsersProviders } from './user.provider';
import { UsersController } from './user.controller';

@Module({
  controllers: [UsersController],
  imports: [BookingModule],
  providers: [UsersProviders, UsersService],
  exports: [UsersProviders, UsersService],
})
export class UserModule {}