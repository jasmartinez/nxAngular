import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map} from 'rxjs/operators';
import * as FeaturesListActions from './features-list.actions';
import { HttpClient } from '@angular/common/http';
import { FeaturesListEntity } from './features-list.models';
import { of } from 'rxjs';

@Injectable()
export class FeaturesListEffects {
  loadFeaturesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeaturesListActions.loadFeaturesList),
      switchMap((action) => {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/albums')
          .pipe(
            map((data:FeaturesListEntity[]) => {
              return FeaturesListActions.loadFeaturesListSuccess({
                featuresList: data
              });
            }),
            catchError((error)=>{
              return of(FeaturesListActions.loadFeaturesListFailure({
                error:error
              }))
            })
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient
    ) {}
}
