import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { TComment, TNewComment } from './comment';
import { TOffer } from './offer';
import { TOfferPreview } from './offer-preview';

export type TUserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type TMainData = {
  activeCity: string;
  offers: TOfferPreview[];
  isLoading: boolean;
  hasError: boolean;
};

export type TOfferData = {
  offer: {
    data: TOffer | null;
    isLoading: boolean;
    offerId: string;
  };
  offersNearBy: {
    data: TOfferPreview[];
    isLoading: boolean;
  };
  comments: {
    data: TComment[];
    isLoading: boolean;
  };
  newComment: {
    data: TNewComment | null;
    isLoading: boolean;
  };
};

export type TFavoriteData = {
  offers: TOfferPreview[];
  isLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
