import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [TestModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
