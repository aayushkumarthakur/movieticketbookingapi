import { Controller, Post, Body, HttpException, HttpStatus, Res ,Param, Headers, Get} from '@nestjs/common';
import { UserbookingsService } from './userbooking.service';
import { IUserbooking } from './interface/userbooking.interface';
@Controller('userbookings')
export class UserbookingsController {
  constructor(private userbookingsService: UserbookingsService) { }

  @Post('book')
    public async book(@Res() res, @Body() credential: any): Promise<any> {
    const result: any = await this.userbookingsService.book(credential);
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
  return res.status(HttpStatus.OK).json(result);
  }

}