import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { mainData } from './main-data/main-data.slice';
import { userProcess } from './user-process/user-process.slice';
import { offerData } from './offer-data/offer-data.slice';
import { favoriteData } from './favorite-data/favorite-data.slice';

export const rootReducer = combineReducers({
  [NameSpace.Main]: mainData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Favorite]: favoriteData.reducer
});
