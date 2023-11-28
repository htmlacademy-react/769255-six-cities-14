import { NameSpace } from '../../const';
import { TComment, TNewComment } from '../../types/comment';
import { TOffer } from '../../types/offer';
import { TOfferPreview } from '../../types/offer-preview';
import { State } from '../../types/state';

export const getOffer = (state: State): TOffer | null =>
  state[NameSpace.Offer].offer.data;
export const getOfferIsLoading = (state: State): boolean =>
  state[NameSpace.Offer].offer.isLoading;
export const getOfferId = (state: State): string =>
  state[NameSpace.Offer].offer.offerId;

export const getOffersNearBy = (state: State): TOfferPreview[] =>
  state[NameSpace.Offer].offersNearBy.data;
export const getOffersNearByIsLoading = (state: State): boolean =>
  state[NameSpace.Offer].offersNearBy.isLoading;

export const getComments = (state: State): TComment[] =>
  state[NameSpace.Offer].comments.data;
export const getCommentsIsLoading = (state: State): boolean =>
  state[NameSpace.Offer].comments.isLoading;

export const getNewComment = (state: State): TNewComment | null =>
  state[NameSpace.Offer].newComment.data;
export const getNewCommentIsLoading = (state: State): boolean =>
  state[NameSpace.Offer].newComment.isLoading;
