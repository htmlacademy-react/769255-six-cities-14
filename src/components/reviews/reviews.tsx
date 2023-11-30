import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getComments } from '../../store/reviews/reviews.selectors';
import { getAuthorizationStatus } from '../../store/user/user.selectors';
import ReviewFrom from './review-form/review-form';
import Review from './review/review';

function Reviews() {
  const comments = useAppSelector(getComments);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const slicedComments = comments.slice(0, 10);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {slicedComments.map((comment) => (
          <Review review={comment} key={comment.id} />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewFrom />}
    </section>
  );
}

export default Reviews;
