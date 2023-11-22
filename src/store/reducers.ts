import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { TOffer } from '../types/offer';
import {
  changeCity,
  getAllOffers,
  getComments,
  getOffer,
  getOfferNearBy,
  requireAuthorization,
  setError,
  setIsLoading,
  setOfferId,
  setOfferIsLoadingStatus,
} from './actions';
import { TOfferPreview } from '../types/offer-preview';
import { TComment } from '../types/comment';

type TInitialState = {
  places: { activeCity: string; offers: TOfferPreview[]; isLoading: boolean };
  auth: { authorizationStatus: AuthorizationStatus };
  error: { error: string | null };
  offer: {
    offer: TOffer | null;
    offerIsLoadingStatus: boolean;
    offerId: string;
    offersNearBy: TOfferPreview[];
    comments: TComment[];
  };
};

const initialState: TInitialState = {
  places: {
    activeCity: 'Paris',
    offers: [],
    isLoading: false,
  },
  auth: { authorizationStatus: AuthorizationStatus.Unknown },
  error: { error: null },
  offer: {
    offer: null,
    offerIsLoadingStatus: true,
    offerId: '',
    offersNearBy: [],
    comments: [],
  },
};

export const placesReducer = createReducer(initialState.places, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      if (action.payload) {
        state.activeCity = action.payload;
      }
    })
    .addCase(getAllOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setIsLoading, (state, action) => {
      state.isLoading = action.payload;
    });
});

export const authReducer = createReducer(initialState.auth, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
});

export const errorReducer = createReducer(initialState.error, (builder) => {
  builder.addCase(setError, (state, action) => {
    state.error = action.payload;
  });
});

export const offerReducer = createReducer(initialState.offer, (builder) => {
  builder
    .addCase(setOfferId, (state, action) => {
      state.offerId = action.payload;
    })
    .addCase(getOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setOfferIsLoadingStatus, (state, action) => {
      state.offerIsLoadingStatus = action.payload;
    })
    .addCase(getOfferNearBy, (state, action) => {
      state.offersNearBy = action.payload;
    })
    .addCase(getComments, (state, action) => {
      state.comments = action.payload;
    });
});
