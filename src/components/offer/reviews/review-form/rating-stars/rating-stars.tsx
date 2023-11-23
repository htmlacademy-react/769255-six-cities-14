import RatingStar from './rating-star/rating-star';

type RatingStarsProps = {
  handleClick: (
    event: React.MouseEventHandler<HTMLInputElement> | undefined
  ) => void;
  ratingRef: React.MutableRefObject<HTMLInputElement | null>;
};

export default function RatingStars({
  handleClick,
  ratingRef,
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
        />
      ))}
    </div>
  );
}
