import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HerbsModule } from './herbs/herbs.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@telefonix.v20yl.mongodb.net/herbme?retryWrites=true&w=majority`,
    ),
    HerbsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
