import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FEATURESLIST_FEATURE_KEY,
  FeaturesListState,
  FeaturesListPartialState,
  featuresListAdapter
} from './features-list.reducer';
import { FavoritesState } from '../index';
// Lookup the 'FeaturesList' feature state managed by NgRx
const getFavoritesState = createFeatureSelector<FavoritesState,FeaturesListPartialState>(FEATURESLIST_FEATURE_KEY)


export const getFeaturesListState = createSelector(
  getFavoritesState,
  (state: FavoritesState) => state.featuresList
);

const { selectAll, selectEntities } = featuresListAdapter.getSelectors();

export const getFeaturesListLoaded = createSelector(
  getFeaturesListState,
  (state: FeaturesListState) => state.loaded
);

export const getFeaturesListError = createSelector(
  getFeaturesListState,
  (state: FeaturesListState) => state.error
);

export const getAllFeaturesList = createSelector(
  getFeaturesListState,
  (state: FeaturesListState) => selectAll(state)
);

export const getFeaturesListEntities = createSelector(
  getFeaturesListState,
  (state: FeaturesListState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getFeaturesListState,
  (state: FeaturesListState) => state.selectedId
);

export const getSelected = createSelector(
  getFeaturesListEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
