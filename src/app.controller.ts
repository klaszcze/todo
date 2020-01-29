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
    return Object.values(this.database);
  }

  @Get("/:id")
  getTodo(@Param("id") id: string): ITodo {
    return this.database[id];
  }

  @Post()
  createTodo(@Body() createData: TodoValidator): ITodo {
    const todo = new Todo(createData.title, createData.order);
    this.database[todo.id] = todo;
    return todo;
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteAll(): void {
    this.database = {};
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteOne(@Param("id") id: string): void {
    delete this.database[id];
  }

  @Patch(":id")
  updateTodo(
    @Param("id") id: string,
    @Body() updateData: TodoUpdateValidator
  ): ITodo {
    const updatedTodo = {
      ...this.database[id],
      ...updateData
    };
    this.database[id] = updatedTodo;
    return this.database[id];
  }
}
