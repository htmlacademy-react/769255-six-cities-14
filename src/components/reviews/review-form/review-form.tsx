import { FormEvent, useRef, useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import RatingStars from './rating-stars/rating-stars';
import { postCommentAction } from '../../../store/reviews/reviews.slice';

export default function ReviewFrom() {
  const dispatch = useAppDispatch();
  const ratingRef = useRef<HTMLInputElement | null>(null);
  const commentRef = useRef<HTMLTextAreaElement | null>(null);
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  const handleClick = (
    event: React.MouseEvent<HTMLInputElement> | undefined
  ) => {
    if (event) {
      setRating(event.currentTarget.value);
    }
  };

  const disabled = !(text.length >= 50 && Number(rating) > 0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (ratingRef.current !== null && commentRef.current !== null) {
      const newComment = {
        rating: Number(ratingRef.current.value),
        comment: commentRef.current.value,
      };
      dispatch(postCommentAction(newComment));
    }
  };
  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <RatingStars handleClick={handleClick} ratingRef={ratingRef} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        ref={commentRef}
        onChange={handleChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={disabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
