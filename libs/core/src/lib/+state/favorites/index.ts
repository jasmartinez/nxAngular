import { combineReducers } from '@ngrx/store';
import * as fromFeatures from './features/features-list.reducer';
import * as fromProducts from './products/products-list.reducer';
import { FeaturesListState } from './features/features-list.reducer';
import { ProductsListState } from './products/products-list.reducer';

export interface FavoritesState {
  featuresList:FeaturesListState
  productsList:ProductsListState
}

export const reducers = combineReducers({
  featuresList: fromFeatures.reducer,
  productsList: fromProducts.reducer
});