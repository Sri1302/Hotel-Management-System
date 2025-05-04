import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('hotels')
export class HotelsController {
    constructor(private hotelsService:HotelsService){}

    @Get()
    getAllHotels(){
        return this.hotelsService.getAllHotels()
    }

    @Post()
    @UseGuards(JwtAuthGuard) //JwtAuthGuard contains JWTSerice ,JWTService is created by Jwtmodule,JWTModule is present in AuthModule
    addHotel(@Body() hotel:{name:string,location:string,price:number,roomsAvailable:number}){
        return this.hotelsService.addHotel(hotel.name,hotel.location,hotel.price,hotel.roomsAvailable)
    }
}
