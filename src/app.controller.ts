import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/:id')
  getTodo() {
    return { title: 'abc'}
  }

  @Post()
  createTodo() {
    const todo = { title: "abc", order: 112, completed: false, url: 'url' }
    return todo
  }
}
