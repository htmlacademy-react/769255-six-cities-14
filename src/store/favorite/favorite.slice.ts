import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TFavoriteData } from '../../types/state';
import {
  fetchFavoriteOffersAction,
  addFavoriteAction,
} from './favorite.api-actions';

const initialState: TFavoriteData = {
  offers: [],
  isLoading: false,
  isLoadingAddFavorite: false
};

export const favoriteData = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addFavoriteAction.fulfilled, (state) => {
        state.isLoadingAddFavorite = false;
      })
      .addCase(addFavoriteAction.pending, (state) => {
        state.isLoadingAddFavorite = true;
      })
      .addCase(addFavoriteAction.rejected, (state) => {
        state.isLoadingAddFavorite = false;
      });
  },
});
