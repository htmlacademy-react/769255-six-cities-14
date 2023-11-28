type RatingStarProps = {
  handleClick: (event: React.MouseEvent<HTMLInputElement> | undefined) => void;
  ratingRef: React.MutableRefObject<HTMLInputElement | null>;
  rating: string;
};

export default function RatingStar({
  handleClick,
  ratingRef,
  rating,
}: RatingStarProps) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={Number(rating)}
        id={`${rating}-stars`}
        type="radio"
        onClick={handleClick}
        ref={ratingRef}
      />
      <label
        htmlFor={`${rating}-stars`}
        className="reviews__rating-label form__rating-label"
        title="perfect"
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}