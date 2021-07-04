import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { BookingModule } from './modules/booking/booking.module';
import { UserbookingModule } from './modules/userbooking/userbooking.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    BookingModule,
    UserbookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}