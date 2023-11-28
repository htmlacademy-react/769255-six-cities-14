import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOfferData } from '../../types/state';
import {
  fetchOfferAction2,
  fetchOfferCommentsAction2,
  fetchOffersNearByAction2,
  postCommentAction2,
} from '../api-actions';

const initialState: TOfferData = {
  offer: {
    data: null,
    isLoading: false,
    offerId: '',
  },
  offersNearBy: {
    data: [],
    isLoading: false,
  },
  comments: {
    data: [],
    isLoading: false,
  },
  newComment: {
    data: null,
    isLoading: false,
  },
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setOfferId(state, action) {
      state.offer.offerId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction2.fulfilled, (state, action) => {
        state.offer.data = action.payload;
        state.offer.isLoading = false;
      })
      .addCase(fetchOfferAction2.pending, (state) => {
        state.offer.isLoading = true;
      })
      .addCase(fetchOfferAction2.rejected, (state) => {
        state.offer.isLoading = false;
      })
      .addCase(fetchOffersNearByAction2.fulfilled, (state, action) => {
        state.offersNearBy.data = action.payload;
        state.offersNearBy.isLoading = false;
      })
      .addCase(fetchOffersNearByAction2.pending, (state) => {
        state.offersNearBy.isLoading = true;
      })
      .addCase(fetchOffersNearByAction2.rejected, (state) => {
        state.offersNearBy.isLoading = false;
      })
      .addCase(fetchOfferCommentsAction2.fulfilled, (state, action) => {
        state.comments.data = action.payload;
        state.comments.isLoading = false;
      })
      .addCase(fetchOfferCommentsAction2.pending, (state) => {
        state.comments.isLoading = true;
      })
      .addCase(fetchOfferCommentsAction2.rejected, (state) => {
        state.comments.isLoading = false;
      })
      .addCase(postCommentAction2.fulfilled, (state, action) => {
        state.newComment.data = action.payload;
        state.newComment.isLoading = false;
      })
      .addCase(postCommentAction2.pending, (state) => {
        state.newComment.isLoading = true;
      })
      .addCase(postCommentAction2.rejected, (state) => {
        state.newComment.isLoading = false;
      });
  },
});

export const { setOfferId } = offerData.actions;
