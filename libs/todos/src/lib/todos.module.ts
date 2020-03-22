import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './components/todos/todos.component';
import { TodoRouteModule } from './todos.routes';
import { TodosService } from './components/todos/services/todos.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TodoRouteModule
  ],
  declarations: [TodosComponent],
  exports: [TodosComponent],
  providers:[
    TodosService
  ]
})
export class TodosModule {}
