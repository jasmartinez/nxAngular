import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ProductsListActions from './products-list.actions';
import { ProductsListEntity } from './products-list.models';

export const PRODUCTSLIST_FEATURE_KEY = 'productsList';

export interface ProductsListState extends EntityState<ProductsListEntity> {
  selectedId?: string | number; // which ProductsList record has been selected
  loaded: boolean; // has the ProductsList list been loaded
  error?: string | null; // last none error (if any)
}

export interface ProductsListPartialState {
  readonly [PRODUCTSLIST_FEATURE_KEY]: ProductsListState;
}

export const productsListAdapter: EntityAdapter<ProductsListEntity> = createEntityAdapter<
  ProductsListEntity
>();

export const initialState: ProductsListState = productsListAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const productsListReducer = createReducer(
  initialState,
  on(ProductsListActions.loadProductsList, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(ProductsListActions.loadProductsListSuccess, (state, { productsList }) =>
    productsListAdapter.addAll(productsList, { ...state, loaded: true })
  ),
  on(ProductsListActions.loadProductsListFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: ProductsListState | undefined, action: Action) {
  return productsListReducer(state, action);
}
