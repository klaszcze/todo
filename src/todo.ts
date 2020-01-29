import { ITodo } from "./interfaces/ITodo"
import uuid = require("uuid");

export class Todo implements ITodo {
    id: string; 
    title: string; 
    completed: boolean;
    url: string;
    order: number;

    constructor(title: string, order?: number) {
        this.id = uuid.v4();
        this.title = title; 
        this.completed = false;
        this.url = 'url'
        this.order = order
    }
}