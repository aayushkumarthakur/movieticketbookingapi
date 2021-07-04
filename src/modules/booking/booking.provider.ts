import { Bookings } from './booking.entity';

export const BookingsProviders = {
  provide: 'BOOKINGS_REPOSITORY',
  useValue: Bookings
}