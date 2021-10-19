import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe({
      whitelist : true,
    }))

    const config = new DocumentBuilder()
    .setTitle('Library Example')
    .setDescription('Descripcion de la aplicacion de biblioteca')
    .setVersion('2.0')
    .addTag('books')
    .addTag("authors")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
