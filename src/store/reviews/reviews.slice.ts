import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TReviewData } from '../../types/state';
import {
  fetchOfferCommentsAction,
  postCommentAction,
} from './reviews.api-actions';

const initialState: TReviewData = {
  reviews: {
    data: [],
    isLoading: false,
  },
  newReview: {
    data: null,
    isLoading: false,
  },
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferCommentsAction.fulfilled, (state, action) => {
        state.reviews.data = action.payload;
        state.reviews.isLoading = false;
      })
      .addCase(fetchOfferCommentsAction.pending, (state) => {
        state.reviews.isLoading = true;
      })
      .addCase(fetchOfferCommentsAction.rejected, (state) => {
        state.reviews.isLoading = false;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.newReview.data = action.payload;
        state.newReview.isLoading = false;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.newReview.isLoading = true;
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.newReview.isLoading = false;
      });
  },
});
