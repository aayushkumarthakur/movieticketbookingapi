import { Injectable, Inject } from '@nestjs/common';
import { Userbookings } from './userbooking.entity';
import { Users } from '../user/user.entity';
import { Bookings } from '../booking/booking.entity';
import { UsersService } from './../user/user.service';
import * as jwt from 'jsonwebtoken';
import { jwtConfig } from './../../config/jwtConfig';
import { BookingsService } from './../booking/booking.service';
import { where } from 'sequelize/types';
import { any } from 'sequelize/types/lib/operators';
@Injectable()
export class UserbookingsService { 
  constructor(
    @Inject('USERBOOKINGS_REPOSITORY')
    private userbookingsRepository: typeof Userbookings,
    private usersService: UsersService,
    private bookingsService: BookingsService,
    @Inject('BOOKINGS_REPOSITORY')
    private bookingsRepository: typeof Bookings,
    @Inject('USERS_REPOSITORY')
    private userRepository: typeof Users,
  ) { }

  public async book(credential:any): Promise<object>{
    const book1= await this.userRepository.findOne({
      where: {id:credential.UserId},
    });
    const jwtToken = jwt.sign({ id: credential.UserIid}, process.env.JWT_KEY, jwtConfig);
    const decodedToken = jwt.verify(jwtToken, process.env.JWT_KEY, jwtConfig);
    const isTokenValid = decodedToken.id === Number(credential.UserId);
    if(isTokenValid)
    {
      console.log("working fine");
    }
    else{
      console.log(decodedToken);
    }
    if(!book1){
      return{
        success: false,
        message: 'Invalid User Id.'
      }
    }
    const book2= await this.bookingsRepository.findOne({
      where: {id:credential.BookingId},
    });
    if(!book2){
      return{
        success: false,
        message: 'Invalid Booking Id'
      }
    }
    if(book2.Seat-credential.Seats<0){
      book2.Seat=book2.Seat-credential.Seats;
      return{
        success:false,
        message: 'All Seats are booked.'
      }
    }
    /*const newuserbook= new Userbookings();
    newuserbook.UserId=book1.id;
    newuserbook.BookingId=book2.id;
    newuserbook.Seats=newuserbook.Seats-credential.Seats;*/
    const newBook:any = await this.userbookingsRepository.create<Userbookings>(credential);
    if(newBook){
    const respons = {
      credential: {
        UserId: book1.id,
        BookingId: book2.id,
        Seats: newBook.Seats,
      },
      success: true,
      message: 'Ticket Booked Succesfully',
    }
    const seatChange=book2.Seat-credential.Seats;
    const book3:any={
      Seat:seatChange,
        createdAt:null,
        updatedAt:null
    }
    const book4= await this.bookingsRepository.update(<Bookings>(book3),{where: {id:credential.BookingId}});
    if(book4){
      console.log('table is updated');
    }
    //this.bookingsRepository.update(credential.Seats, Seat) + 'where id = credential.BookingId';
    return respons;
  }
  }  
  } 

function Seats(Seats: any) {
  throw new Error('Function not implemented.');
}

