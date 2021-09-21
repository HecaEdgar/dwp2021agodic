import { Body, Controller, Get, Param, ParseIntPipe, Post, Req, Request } from '@nestjs/common';
import { Peticion } from './dto/peticion.dto';

@Controller('MyController')
export class TestController {

    @Get(':id/:usr')
    getHello(@Param('id',ParseIntPipe) myid : number, @Param('usr') usr): string {
        return "hola GET: "+myid + " - "+usr;
      }

      @Post()
      getHello2(@Req() request: Request): string {
        console.log(request.body);
          return "hola POST: "+request.body["id"]+ " - "+request.body["usr"];
        }
        //6lcdnw4
        //DTO
        @Post('directo')
        getHello3(@Body() peticion : Peticion): string {
          
            return "hola POST: "+peticion.id+ " - "+peticion.usr;
          }
}
