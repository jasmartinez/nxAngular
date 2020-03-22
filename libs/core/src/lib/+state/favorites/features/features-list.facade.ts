import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromFeaturesList from './features-list.reducer';
import * as FeaturesListSelectors from './features-list.selectors';
import * as FeaturesListActions from './features-list.actions';

@Injectable()
export class FeaturesListFacade {
  loaded$ = this.store.pipe(
    select(FeaturesListSelectors.getFeaturesListLoaded)
  );
  allFeaturesList$ = this.store.pipe(
    select(FeaturesListSelectors.getAllFeaturesList)
  );
  selectedFeaturesList$ = this.store.pipe(
    select(FeaturesListSelectors.getSelected)
  );

  constructor(
    private store: Store<fromFeaturesList.FeaturesListPartialState>
  ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  fetchData(){
    this.store.dispatch(FeaturesListActions.loadFeaturesList());
  }

}
