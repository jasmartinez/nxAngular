import { Injectable, HttpService } from '@nestjs/common';
interface Todo {
  title: string;
}

@Injectable()
export class AppService {
 public todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];
  constructor(
    private httpService: HttpService
  ){
  }

  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    });
  }
}
