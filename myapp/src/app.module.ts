import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "dwp2021",
        "password": "mipasswordbiendificilote",
        "database": "dwp2021",
        "entities": ["dist/**/*.entity{.ts,.js}"],
        "synchronize": true
    }),
    TestModule, 
    BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
