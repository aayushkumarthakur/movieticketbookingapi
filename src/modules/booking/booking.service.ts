import { Injectable, Inject } from '@nestjs/common';
import { Bookings } from './booking.entity';
@Injectable()
export class BookingsService {
  static findOne: any; 
  constructor(
    @Inject('BOOKINGS_REPOSITORY')
    private bookingsRepository: typeof Bookings
  ) { }
  public async getallbookings() : Promise<object> {
      return await this.bookingsRepository.findAll();
    }
  public async filtr(credential:any): Promise<object>{
    const book1= await Bookings.findOne<Bookings>({
      where: {Location: credential.Location, Movie: credential.Movie, Theatre: credential.Theatre, Showtime: credential.Showtime},
      attributes: {exclude: ['createdAT','updatedAt']}
    });
    if(!book1){
      return{
        success: false,
        message: 'Sorry We don\'t have this movie in your location.'
      }
    }
    const respons = {
      book1: {
        id: book1.id,
        Location: book1.Location,
        Movie: book1.Movie,
        Theatre: book1.Theatre,
        Showtime: book1.Showtime,
        Seat:book1.Seat
      },
      success: true,
    }
    return respons;
  }  
  }  
