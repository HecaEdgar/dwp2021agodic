import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsDate, IsInt } from "class-validator";


export class CreateBookDto {
    @IsString()
    @ApiProperty({description: "Nombre del libro"})
    name : string; //editable
    
    @IsDate()
    @Type(() => Date)
    @ApiProperty()
    publish_date : Date;
    
    @IsString()
    @ApiProperty()
    category : string;
   
    @IsString()
    @ApiProperty()
    publisher : string;
    
    @IsInt()
    @ApiProperty()
    sell_price : number;
    
    @IsString()
    @ApiProperty()
    isbn : string;
    
    @IsInt()
    @ApiProperty()
    stock : number;
    
    @IsString()
    @ApiProperty()
    edition : string;
}
