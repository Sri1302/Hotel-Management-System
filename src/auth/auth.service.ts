import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'


@Injectable()
export class AuthService {
    constructor(private usersService:UsersService,private jwtService:JwtService){}

    register(username:string,password:string){
        return this.usersService.createUser(username,password)
    }

    login(username:string,password:string){
        const user = this.usersService.validateUser(username,password)
        if(!user) return null
        const token = this.jwtService.sign({id:user.id,username:user.username})
        return {accessToken:token}
    }
}
