import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import * as fromFavoriteReducers from './favorites';
import {  routerReducer } from '@ngrx/router-store';
 
export interface RootState {
  router:any,
  favorites: fromFavoriteReducers.FavoritesState
}
export const ROOT_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<RootState>>('Root Reducers');

export function getReducers(): ActionReducerMap<RootState> {
  // map of reducers
  return {
    router: routerReducer,
    favorites: fromFavoriteReducers.reducers
  };
}
 