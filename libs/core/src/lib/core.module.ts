import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductsListEffects } from './+state/favorites/products/products-list.effects';
import { ProductsListFacade } from './+state/favorites/products/products-list.facade';
import { FeaturesListEffects } from './+state/favorites/features/features-list.effects';
import { FeaturesListFacade } from './+state/favorites/features/features-list.facade';
import { ROOT_REDUCER_TOKEN, getReducers } from './+state';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(
      ROOT_REDUCER_TOKEN,
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([
      ProductsListEffects,
      FeaturesListEffects
    ]),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    ProductsListFacade,
    FeaturesListFacade,
    {
      provide: ROOT_REDUCER_TOKEN,
      useFactory: getReducers,
    },
  ]
})
export class CoreModule { }
