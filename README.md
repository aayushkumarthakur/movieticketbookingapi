Three Database Table using ProgreSQL.
1) Users : (id,UserName,Email,Password)
2) Bookings : (id,Location,Movie,Theatre,Showtime,Seat)
3) UsersBookings : (id,UserId,BookingId,Seats)

API CALL-
1) POST : localhost:3000/users/register - (for signup)
2) POST : localhost:3000/users/login - (for login)
3) POST : localhost:3000/users/id - (for user authentication)
4) GET : localhost:3000/bookings/book - (to check all the details regarding movie as per details like location, theatre,showtime and seats available)
5) POST : localhost:3000/bookings/filtr - ( to check particular details of booking table)
6) POST : localhost:3000/userbookings/book - (to book the movie ticket)


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
