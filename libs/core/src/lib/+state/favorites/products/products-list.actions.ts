import { createAction, props } from '@ngrx/store';
import { ProductsListEntity } from './products-list.models';

export const loadProductsList = createAction(
  '[ProductsList] Load ProductsList'
);

export const loadProductsListSuccess = createAction(
  '[ProductsList] Load ProductsList Success',
  props<{ productsList: ProductsListEntity[] }>()
);

export const loadProductsListFailure = createAction(
  '[ProductsList] Load ProductsList Failure',
  props<{ error: any }>()
);
