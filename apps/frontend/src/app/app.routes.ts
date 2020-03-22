import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';


const appRoutes:Route[] = [
  {
    path: 'todos', 
    loadChildren: () => import('@casa/todos').then(m => m.TodosModule)
  }
]


@NgModule({
  declarations: [],
  imports: [ CommonModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  exports: [],
  providers: [],
})
export class AppRouteModule {}
