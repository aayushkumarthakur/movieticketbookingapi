import { Controller, Post, Body, HttpException, HttpStatus, Res ,Param, Headers, Get} from '@nestjs/common';
import { BookingsService } from './booking.service';
import { IBooking } from './interfaces/booking.interface';
@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) { }

  @Get('book')  
    public async register(): Promise<any> {    
    const result: any = await this.bookingsService.getallbookings();
    console.log(result);
    return result;
  }
  @Post('filtr')
    public async filtr(@Res() res, @Body() credential: any): Promise<any> {
    const result: any = await this.bookingsService.filtr(credential);
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
  return res.status(HttpStatus.OK).json(result);
  }

}