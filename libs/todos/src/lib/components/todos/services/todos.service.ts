import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Todo } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodosService {

  constructor(
    private http: HttpClient
  ) { }

  fetch() {
   return this.http.get<Observable<Todo[]>>('/api/todos').pipe(take(1));
  }

  addTodo(data:Todo) {
    this.http.post('/api/addTodo', data).pipe(take(1));
  }
}
