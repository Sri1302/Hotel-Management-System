import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[UsersModule,
    JwtModule.register(
      {secret:"VENKAt",
        signOptions:{expiresIn:'1d'}
      }
    )
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[AuthService,JwtModule]
})
export class AuthModule {}
