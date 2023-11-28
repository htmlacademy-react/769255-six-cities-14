import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIRoute, NameSpace } from '../../const';
import { AppDispatch, State, TOfferData } from '../../types/state';
import { AxiosInstance } from 'axios';
import { TOffer } from '../../types/offer';
import { TComment, TNewComment } from '../../types/comment';
import { TOfferPreview } from '../../types/offer-preview';

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

export const fetchOfferAction = createAsyncThunk<
  TOffer,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchOffer', async (_arg, { getState, extra: api }) => {
  const state = getState();
  const offerId = state.OFFER.offer.offerId;
  const { data } = await api.get<TOffer>(`${APIRoute.Offers}/${offerId}`);
  return data;
});

export const fetchOffersNearByAction = createAsyncThunk<
  TOfferPreview[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchOffersNearBy', async (_arg, { getState, extra: api }) => {
  const state = getState();
  const offerId = state.OFFER.offer.offerId;
  const { data } = await api.get<TOfferPreview[]>(
    `${APIRoute.Offers}/${offerId}/nearBy`
  );
  return data;
});

export const fetchOfferCommentsAction = createAsyncThunk<
  TComment[],
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('offer/fetchOfferComments', async (_arg, { getState, extra: api }) => {
  const state = getState();
  const offerId = state.OFFER.offer.offerId;
  const { data } = await api.get<TComment[]>(`${APIRoute.Comments}/${offerId}`);
  return data;
});

export const postCommentAction = createAsyncThunk<
  TComment,
  TNewComment,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'offer/postComment',
  async ({ comment, rating }, { dispatch, getState, extra: api }) => {
    const state = getState();
    const offerId = state.OFFER.offer.offerId;
    const { data } = await api.post<TComment>(
      `${APIRoute.Comments}/${offerId}`,
      { comment, rating }
    );
    if (data) {
      dispatch(fetchOfferCommentsAction());
    }
    return data;
  }
);
export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setOfferId(state, action: PayloadAction<string>) {
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
