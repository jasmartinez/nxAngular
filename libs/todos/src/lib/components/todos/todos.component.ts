import { Component, OnInit } from '@angular/core';
import { Todo } from './models';
import { FeaturesListFacade } from '@casa/core';

@Component({
  selector: 'casa-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public dataSource: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];
  constructor(
   private featuresListFacade:FeaturesListFacade
  ) { }

  ngOnInit(): void {
    this.featuresListFacade.fetchData();
  }

}
