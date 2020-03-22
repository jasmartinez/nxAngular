import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';


const todoRoutes:Route[] = [
  {
    path: '', 
    component:TodosComponent
  }
]


@NgModule({
  declarations: [],
  imports: [ CommonModule,
    RouterModule.forChild(
      todoRoutes)
  ],
  exports: [],
  providers: [],
})
export class TodoRouteModule {}
