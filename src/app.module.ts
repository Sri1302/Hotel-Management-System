import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HotelsModule } from './hotels/hotels.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [UsersModule, AuthModule, HotelsModule, BookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
