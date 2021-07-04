import { Userbookings } from './userbooking.entity';

export const UserbookingsProviders = {
  provide: 'USERBOOKINGS_REPOSITORY',
  useValue: Userbookings
}