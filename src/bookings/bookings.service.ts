import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingsService {
    private bookings =[
        {
            "id":1,
            "userId":1,
            "hotelId":2,
            "name":"Taj motera",
            "date":2025
        }
    ]

    bookHotel(userId:number,hotelId:number,name:string){
        const descO = [...this.bookings].sort((a,b)=>b.id-a.id)
        const newBooking ={id:descO[0].id+1,userId,hotelId,name,date:Date.now()}
        this.bookings.push(newBooking)
        return newBooking
    }

    getUserBookings(userId:number){
        return this.bookings.find(b=>b.userId===userId)
    }
}
