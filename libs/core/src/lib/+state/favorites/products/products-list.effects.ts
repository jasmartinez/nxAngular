import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromProductsList from './products-list.reducer';
import * as ProductsListActions from './products-list.actions';

@Injectable()
export class ProductsListEffects {
  loadProductsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsListActions.loadProductsList),
      fetch({
        run: action => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return ProductsListActions.loadProductsListSuccess({
            productsList: []
          });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return ProductsListActions.loadProductsListFailure({ error });
        }
      })
    )
  );

  constructor(private actions$: Actions) {}
}
