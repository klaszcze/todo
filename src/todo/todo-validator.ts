import { ICreateTodo } from "./interfaces/ICreateTodo";
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean } from "class-validator";
import { IUpdateTodo } from "./interfaces/IUpdateTodo";

export class TodoValidator implements ICreateTodo {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsOptional()
    @IsNumber()
    order?: number;
}

export class TodoUpdateValidator implements IUpdateTodo {
    @IsString()
    @IsOptional()
    title?: string;

    @IsOptional()
    @IsNumber()
    order?: number;

    @IsOptional()
    @IsBoolean()
    completed?: boolean;
}