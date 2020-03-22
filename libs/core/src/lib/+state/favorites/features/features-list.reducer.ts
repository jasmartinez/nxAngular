import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as FeaturesListActions from './features-list.actions';
import { FeaturesListEntity } from './features-list.models';

export const FEATURESLIST_FEATURE_KEY = 'featuresList';

export interface FeaturesListState extends EntityState<FeaturesListEntity> {
  selectedId?: string | number; // which FeaturesList record has been selected
  loaded: boolean; // has the FeaturesList list been loaded
  error?: string | null; // last none error (if any)
}

export interface FeaturesListPartialState {
  readonly [FEATURESLIST_FEATURE_KEY]: FeaturesListState;
}

export const featuresListAdapter: EntityAdapter<FeaturesListEntity> = createEntityAdapter<
  FeaturesListEntity
>();

export const initialState: FeaturesListState = featuresListAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const featuresListReducer = createReducer(
  initialState,
  on(FeaturesListActions.loadFeaturesList, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(FeaturesListActions.loadFeaturesListSuccess, (state, { featuresList }) =>
    featuresListAdapter.addAll(featuresList, { ...state, loaded: true })
  ),
  on(FeaturesListActions.loadFeaturesListFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: FeaturesListState | undefined, action: Action) {
  return featuresListReducer(state, action);
}
