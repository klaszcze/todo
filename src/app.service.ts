import { Injectable } from '@nestjs/common';
import { ITodo } from './interfaces/ITodo';
import { TodoValidator, TodoUpdateValidator } from './todo-validator';
import { Todo } from './todo';
import { ICreateTodo } from './interfaces/ICreateTodo';
import { IUpdateTodo } from './interfaces/IUpdateTodo';

@Injectable()
export class AppService {
  private database: { [id: number]: ITodo } = {};

  getHello(): string {
    return 'Hello World!';
  }
  
  getTodos(): ITodo[] {
    return Object.values(this.database);
  }

  getTodo(id: string): ITodo {
    return this.database[id];
  }

  createTodo(createData: ICreateTodo): ITodo {
    const todo = new Todo(createData.title, createData.order);
    this.database[todo.id] = todo;
    return todo;
  }

  deleteAll(): void {
    this.database = {};
  }

  deleteOne(id: string): void {
    delete this.database[id];
  }

  updateTodo(id: string, updateData: IUpdateTodo): ITodo {
    const updatedTodo = {
      ...this.database[id],
      ...updateData
    };
    this.database[id] = updatedTodo;
    return this.database[id];
  }
}
