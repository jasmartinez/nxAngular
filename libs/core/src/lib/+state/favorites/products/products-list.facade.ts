import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromProductsList from './products-list.reducer';
import * as ProductsListSelectors from './products-list.selectors';

@Injectable()
export class ProductsListFacade {
  loaded$ = this.store.pipe(
    select(ProductsListSelectors.getProductsListLoaded)
  );
  allProductsList$ = this.store.pipe(
    select(ProductsListSelectors.getAllProductsList)
  );
  selectedProductsList$ = this.store.pipe(
    select(ProductsListSelectors.getSelectedProduct)
  );

  constructor(
    private store: Store<fromProductsList.ProductsListPartialState>
  ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
