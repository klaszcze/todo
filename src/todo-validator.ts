import { ICreateTodo } from "./interfaces/ICreateTodo";
import { IsString, IsNotEmpty, IsOptional, IsNumber } from "class-validator";

export class TodoValidator implements ICreateTodo {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsOptional()
    @IsNumber()
    order?: number;
}