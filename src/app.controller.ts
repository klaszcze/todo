import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ICreateTodo } from './interfaces/ICreateTodo'
import { ITodo } from './interfaces/ITodo'
import { thistle } from 'color-name';
import { Todo } from './todo'

@Controller('/todos')
export class AppController {
  constructor(private readonly appService: AppService) {}
  private database:{ [id:number] : ITodo} = {};

  @Get()
  getTodos(): ITodo[] {
    return Object.values(this.database)
  }

  @Get('/:id')
  getTodo() {
    return { title: 'abc'}
  }

  @Post()
  createTodo(@Body() createData: ICreateTodo): ITodo {
    const todo = new Todo(createData.title, createData.order)
    this.database[todo.id] = todo
    return todo;
  }
}
