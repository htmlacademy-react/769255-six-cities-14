import { TUser } from './user';

export type TReview = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: TUser;
};
