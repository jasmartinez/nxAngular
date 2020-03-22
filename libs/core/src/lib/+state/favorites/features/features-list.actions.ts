import { createAction, props } from '@ngrx/store';
import { FeaturesListEntity } from './features-list.models';

export const loadFeaturesList = createAction(
  '[FeaturesList] Load FeaturesList'
);

export const loadFeaturesListSuccess = createAction(
  '[FeaturesList] Load FeaturesList Success',
  props<{ featuresList: FeaturesListEntity[] }>()
);

export const loadFeaturesListFailure = createAction(
  '[FeaturesList] Load FeaturesList Failure',
  props<{ error: any }>()
);
