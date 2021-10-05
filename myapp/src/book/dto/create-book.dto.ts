import { IsArray, IsDate, IsInt, IsString } from "class-validator";

export class CreateBookDto {
    @IsString()
    name : string; //editable
    
    @IsDate()
    publish_date : Date;
    
    @IsString()
    category : string;

    @IsString()
    @IsArray({ each: true })
    author : string[];
    
    @IsString()
    publisher : string;
    
    @IsInt()
    sell_price : number;
    
    @IsString()
    isbn : string;
    
    @IsInt()
    stock : number;
    
    @IsString()
    edition : string;
}
