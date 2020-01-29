import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Delete,
  HttpCode,
  HttpStatus,
  Patch
} from "@nestjs/common";
import { AppService } from "./app.service";
import { ICreateTodo } from "./interfaces/ICreateTodo";
import { ITodo } from "./interfaces/ITodo";
import { thistle } from "color-name";
import { Todo } from "./todo";
import { TodoValidator, TodoUpdateValidator } from "./todo-validator";

@UsePipes(new ValidationPipe())
@Controller("/todos")
export class AppController {
  constructor(private readonly appService: AppService) {}
  private database: { [id: number]: ITodo } = {};

  @Get()
  getTodos(): ITodo[] {
    return this.appService.getTodos()
  }

  @Get("/:id")
  getTodo(@Param("id") id: string): ITodo {
    return this.appService.getTodo(id);
  }

  @Post()
  createTodo(@Body() createData: TodoValidator): ITodo {
    return this.appService.createTodo(createData);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteAll(): void {
    this.appService.deleteAll();
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteOne(@Param("id") id: string): void {
    this.appService.deleteOne(id);
  }

  @Patch(":id")
  updateTodo(
    @Param("id") id: string,
    @Body() updateData: TodoUpdateValidator
  ): ITodo {
    return this.appService.updateTodo(id, updateData);
  }
}
