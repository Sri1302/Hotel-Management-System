import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('register')
    register(@Body() user:{username:string,password:string}){
        return this.authService.register(user.username,user.password)
    }

    @Post('login')
    login(@Body() user:{username:string,password:string}){
        return this.authService.login(user.username,user.password)
    }
}
