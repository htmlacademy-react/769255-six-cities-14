import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { TOffer } from './offer';
import { TOfferPreview } from './offer-preview';
import { TNewReview, TReview } from './review';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type TUserProcess = TUserData & {
  authorizationStatus: AuthorizationStatus;
};

export type TUserData = {
  token: string;
  email: string;
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type TAuthData = {
  login: string;
  password: string;
};

export type TMainData = {
  activeCity: string;
  offers: TOfferPreview[];
  isLoading: boolean;
  hasError: boolean;
  isLoadingAddFavorite: boolean;
};

export type TOfferData = {
  data: TOffer | null;
  isLoading: boolean;
  offerId: string;
  isLoadingAddFavorite: boolean;
};

export type TOffersNearByData = {
  data: TOfferPreview[];
  isLoading: boolean;
};

export type TReviewData = {
  reviews: {
    data: TReview[];
    isLoading: boolean;
  };
  newReview: {
    data: TNewReview | null;
    isLoading: boolean;
  };
};

export type TFavoriteData = {
  offers: TOfferPreview[];
  isLoading: boolean;
  isLoadingAddFavorite: boolean;
};

export type TFavoritePost = {
  status: number;
  id: string;
};

export type TError = {
  error: string | null;
}
