import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOfferData } from '../../types/state';
import {
  fetchOfferAction,
  fetchOfferCommentsAction,
  fetchOffersNearByAction,
  postCommentAction,
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
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer.data = action.payload;
        state.offer.isLoading = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.offer.isLoading = true;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.offer.isLoading = false;
      })
      .addCase(fetchOffersNearByAction.fulfilled, (state, action) => {
        state.offersNearBy.data = action.payload;
        state.offersNearBy.isLoading = false;
      })
      .addCase(fetchOffersNearByAction.pending, (state) => {
        state.offersNearBy.isLoading = true;
      })
      .addCase(fetchOffersNearByAction.rejected, (state) => {
        state.offersNearBy.isLoading = false;
      })
      .addCase(fetchOfferCommentsAction.fulfilled, (state, action) => {
        state.comments.data = action.payload;
        state.comments.isLoading = false;
      })
      .addCase(fetchOfferCommentsAction.pending, (state) => {
        state.comments.isLoading = true;
      })
      .addCase(fetchOfferCommentsAction.rejected, (state) => {
        state.comments.isLoading = false;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.newComment.data = action.payload;
        state.newComment.isLoading = false;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.newComment.isLoading = true;
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.newComment.isLoading = false;
      });
  },
});

export const { setOfferId } = offerData.actions;
