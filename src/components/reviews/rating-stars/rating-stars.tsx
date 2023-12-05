import RatingStar from './rating-star/rating-star';
import { RATINGS } from '../../../const';

type RatingStarsProps = {
  onClick: (event: React.MouseEvent<HTMLInputElement> | undefined) => void;
  ratingRef: React.MutableRefObject<HTMLInputElement | null>;
  disabled: boolean;
};

export default function RatingStars({
  onClick,
  ratingRef,
  disabled,
}: RatingStarsProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {RATINGS.map((rating) => (
        <RatingStar
          onClick={onClick}
          ratingRef={ratingRef}
          rating={rating}
          key={rating}
          disabled={disabled}
        />
      ))}
    </div>
  );
}
