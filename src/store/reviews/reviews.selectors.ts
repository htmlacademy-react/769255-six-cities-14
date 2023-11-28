import { NameSpace } from '../../const';
import { TReview, TNewReview } from '../../types/review';
import { State } from '../../types/state';

export const getComments = (state: State): TReview[] =>
  state[NameSpace.Reviews].reviews.data;
export const getCommentsIsLoading = (state: State): boolean =>
  state[NameSpace.Reviews].reviews.isLoading;

export const getNewComment = (state: State): TNewReview | null =>
  state[NameSpace.Reviews].newReview.data;
export const getNewCommentIsLoading = (state: State): boolean =>
  state[NameSpace.Reviews].newReview.isLoading;
