import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOfferData } from '../../types/state';
import { postFavoriteAction } from '../favorite/favorite.api-actions';
import { fetchOfferAction } from './offer.api-actions';

const initialState: TOfferData = {
  data: null,
  isLoading: false,
  offerId: '',
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setOfferId(state, action: PayloadAction<string>) {
      state.offerId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(postFavoriteAction.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(postFavoriteAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postFavoriteAction.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setOfferId } = offerData.actions;
