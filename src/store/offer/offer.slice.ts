import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOfferData } from '../../types/state';
import { addFavoriteFromOfferAction } from '../offer/offer.api-actions';
import { fetchOfferAction } from './offer.api-actions';

const initialState: TOfferData = {
  data: null,
  isLoading: false,
  offerId: '',
  isLoadingFavoritePost: false,
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
      .addCase(addFavoriteFromOfferAction.fulfilled, (state, action) => {
        if (action.payload) {
          state.data = action.payload;
        }
        state.isLoadingAddFavorite = false;
      })
      .addCase(addFavoriteFromOfferAction.pending, (state) => {
        state.isLoadingAddFavorite = true;
      })
      .addCase(addFavoriteFromOfferAction.rejected, (state) => {
        state.isLoadingAddFavorite = false;
      });
  },
});

export const { setOfferId } = offerData.actions;
