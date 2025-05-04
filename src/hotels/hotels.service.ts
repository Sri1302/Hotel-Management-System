import { Injectable } from '@nestjs/common';

@Injectable()
export class HotelsService {
    private hotels =[
        {
            "id":1,
            "name":"Taj Hotel",
            "location":"Bengaluru",
            "price":120,
            "roomsAvailable":3
        },
        {
            "id":2,
            "name":"Oberoi",
            "location":"Bengaluru",
            "price":200,
            "roomsAvailable":8
        }
    ]

    getAllHotels(){
        return this.hotels
    }

    addHotel(name:string,location:string,price:number,roomsAvailable:number){
        const descO = [...this.hotels].sort((a,b)=>b.id-a.id)
        const newHotel = {id:descO[0].id+1,name,location,price,roomsAvailable}
        this.hotels.push(newHotel)
        return newHotel
    }
}
