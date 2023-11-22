import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { TComment } from '../types/comment';
import { TOffer } from '../types/offer';
import { TOfferPreview } from '../types/offer-preview';
import {
  changeCity,
  getAllOffers,
  getComments,
  getFavoriteOffers,
  getOffer,
  getOfferNearBy,
  requireAuthorization,
  setError,
  setFavoriteIsLoading,
  setIsLoading,
  setOfferId,
  setOfferIsLoadingStatus,
} from './actions';

type TInitialState = {
  places: { activeCity: string; offers: TOfferPreview[]; isLoading: boolean };
  auth: { authorizationStatus: AuthorizationStatus };
  error: { error: string | null };
  offer: {
    offer: TOffer | null;
    isLoading: boolean;
    offerId: string;
    offersNearBy: TOfferPreview[];
    comments: TComment[];
  };
  favorite: {
    offers: TOfferPreview[];
    isLoading: boolean;
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
    isLoading: false,
    offerId: '',
    offersNearBy: [],
    comments: [],
  },
  favorite: {
    offers: [],
    isLoading: false,
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
      state.isLoading = action.payload;
    })
    .addCase(getOfferNearBy, (state, action) => {
      state.offersNearBy = action.payload;
    })
    .addCase(getComments, (state, action) => {
      state.comments = action.payload;
    });
});

export const favoriteReducer = createReducer(initialState.favorite, (builder) =>
  builder
    .addCase(getFavoriteOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setFavoriteIsLoading, (state, action) => {
      state.isLoading = action.payload;
    })
);
