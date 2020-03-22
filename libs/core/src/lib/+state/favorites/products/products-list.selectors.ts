import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PRODUCTSLIST_FEATURE_KEY,
  ProductsListState,
  ProductsListPartialState,
  productsListAdapter
} from './products-list.reducer';
import { FavoritesState } from '../index';
// Lookup the 'ProductsList' feature state managed by NgRx
export const getFavoritesState = createFeatureSelector<FavoritesState,ProductsListPartialState>(PRODUCTSLIST_FEATURE_KEY)

export const getProductsListState = createSelector(getFavoritesState,
  (state:FavoritesState) => state.productsList
  );

const { selectAll, selectEntities } = productsListAdapter.getSelectors();

export const getProductsListLoaded = createSelector(
  getProductsListState,
  (state: ProductsListState) => state.loaded
);

export const getProductsListError = createSelector(
  getProductsListState,
  (state: ProductsListState) => state.error
);

export const getAllProductsList = createSelector(
  getProductsListState,
  (state: ProductsListState) => selectAll(state)
);

export const getProductsListEntities = createSelector(
  getProductsListState,
  (state: ProductsListState) => selectEntities(state)
);

export const getSelectedIdPrpduct = createSelector(
  getProductsListState,
  (state: ProductsListState) => state.selectedId
);

export const getSelectedProduct = createSelector(
  getProductsListEntities,
  getSelectedIdPrpduct,
  (entities, selectedId) => selectedId && entities[selectedId]
);
