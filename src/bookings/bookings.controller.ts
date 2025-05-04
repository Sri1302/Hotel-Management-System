import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard) //JWTAuthGuard contains JWTservice, JWTService is created by module , JWTModule is presnt in AUthModule
@Controller('bookings')
export class BookingsController {
    constructor(private bookingsService:BookingsService){}

    @Post()
    bookHotel(@Body() booking:{hotelId:number,name:string}, @Request() req){
        const user = req.user
        return this.bookingsService.bookHotel(user.id,booking.hotelId,booking.name)
    }

    @Get()
    getUserBookings(@Request() req){
        const user = req.user
        return this.bookingsService.getUserBookings(user.id)
    }
}
