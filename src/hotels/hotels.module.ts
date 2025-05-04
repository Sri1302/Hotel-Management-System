import { Module } from '@nestjs/common';
import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule],
  controllers: [HotelsController],
  providers: [HotelsService]
})
export class HotelsModule {}
