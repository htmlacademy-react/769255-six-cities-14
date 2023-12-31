type RatingStarProps = {
  onClick: (event: React.MouseEvent<HTMLInputElement> | undefined) => void;
  ratingRef: React.MutableRefObject<HTMLInputElement | null>;
  rating: string;
  disabled: boolean;
};

export default function RatingStar({
  onClick,
  ratingRef,
  rating,
  disabled,
}: RatingStarProps) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={Number(rating)}
        id={`${rating}-stars`}
        type="radio"
        onClick={onClick}
        ref={ratingRef}
        disabled={disabled}
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
