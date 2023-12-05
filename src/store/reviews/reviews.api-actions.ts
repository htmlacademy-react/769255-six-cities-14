import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { TReview, TNewReview } from '../../types/review';
import { AppDispatch, State } from '../../types/state';

export const fetchOfferCommentsAction = createAsyncThunk<
  TReview[],
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('REVIEWS/fetchOfferComments', async (_arg, { getState, extra: api }) => {
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
  'REVIEWS/postComment',
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
