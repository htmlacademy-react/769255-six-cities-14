import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, NameSpace } from '../../const';
import { TReview, TNewReview } from '../../types/review';
import { AppDispatch, State, TReviewData } from '../../types/state';

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

export const fetchOfferCommentsAction = createAsyncThunk<
  TReview[],
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('offer/fetchOfferComments', async (_arg, { getState, extra: api }) => {
  const state = getState();
  const offerId = state.OFFER.offerId;
  const { data } = await api.get<TReview[]>(`${APIRoute.Comments}/${offerId}`);
  return data;
});

export const postCommentAction = createAsyncThunk<
  TReview,
  TNewReview,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'offer/postComment',
  async ({ comment, rating }, { dispatch, getState, extra: api }) => {
    const state = getState();
    const offerId = state.OFFER.offerId;
    const { data } = await api.post<TReview>(
      `${APIRoute.Comments}/${offerId}`,
      { comment, rating }
    );
    if (data) {
      dispatch(fetchOfferCommentsAction());
    }
    return data;
  }
);

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
