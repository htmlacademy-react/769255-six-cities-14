import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { mainData } from './main/main.slice';
import { userProcess } from './user/user.slice';
import { offerData } from './offer/offer.slice';
import { favoriteData } from './favorite/favorite.slice';
import { offersNearByData } from './offers-near-by/offers-near-by.slice';
import { reviewsData } from './reviews/reviews.slice';
import { errorData } from './error/error.slice';

export const rootReducer = combineReducers({
  [NameSpace.Main]: mainData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Favorite]: favoriteData.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.OffersNearBy]: offersNearByData.reducer,
  [NameSpace.Error]: errorData.reducer
});
