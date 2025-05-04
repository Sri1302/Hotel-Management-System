import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    private users =[
        {
            "id":1,
            "username":"venkat",
            "password":"Venkat@1"
        }
    ]

    async createUser(username:string,password:string){
        const descO = [...this.users].sort((a,b)=>b.id-a.id)
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = {id:descO[0].id+1,username,password:hashedPassword}
        this.users.push(newUser)
        return newUser
    }

    findUser(username:string){
        return this.users.find(user=>user.username===username)
    }

    validateUser(username:string,password:string){
        const user = this.findUser(username)
        if(!user) return null
        const isMatch = bcrypt.compare(password,user.password)
        return isMatch?user:null
    }
}
