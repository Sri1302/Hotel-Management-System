import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class JwtAuthGuard implements CanActivate{
    constructor(private jwtService:JwtService){}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<Request>()

        //extract token from auth headers
        const authHeader = request.headers['authorization']
        if(!authHeader) throw new UnauthorizedException('Missing Token')
        
        const token = authHeader.split(' ')[1]
        //verify the token
        try{
            const verifyToken = this.jwtService.verify(token,{
                secret:'VENKAt'
            })
            request['user'] = verifyToken
            return true
        }
        catch(e){
            throw new UnauthorizedException('Invalid Tokem')
        }
    }
}