import { TReview } from '../../../../types/review';
import { dateFormat } from '../../../../utils';

type ReviewProps = {
  review: TReview;
};
export default function Review({ review }: ReviewProps) {
  const { user, rating, comment, date } = review;
  const ratingStar = (rating * 20).toString();

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${ratingStar}%` }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time">{dateFormat(date)}</time>
      </div>
    </li>
  );
}
