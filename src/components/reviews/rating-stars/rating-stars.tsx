import RatingStar from './rating-star/rating-star';

type RatingStarsProps = {
  handleClick: (event: React.MouseEvent<HTMLInputElement> | undefined) => void;
  ratingRef: React.MutableRefObject<HTMLInputElement | null>;
  disabled: boolean;
};

export default function RatingStars({
  handleClick,
  ratingRef,
  disabled,
}: RatingStarsProps) {
  const ratings = ['1', '2', '3', '4', '5'];

  return (
    <div className="reviews__rating-form form__rating">
      {ratings.map((rating) => (
        <RatingStar
          handleClick={handleClick}
          ratingRef={ratingRef}
          rating={rating}
          key={rating}
          disabled={disabled}
        />
      ))}
    </div>
  );
}
