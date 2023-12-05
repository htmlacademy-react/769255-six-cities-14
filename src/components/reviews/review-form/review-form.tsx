import { FormEvent, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getError } from '../../../store/error/error.selectors';
import { postCommentAction } from '../../../store/reviews/reviews.api-actions';
import RatingStars from '../rating-stars/rating-stars';
import { REVIEW_MAX_LENGTH, REVIEW_MIN_LENGTH } from '../../../const';

export default function ReviewFrom() {
  const dispatch = useAppDispatch();
  const error = useAppSelector(getError);

  const ratingRef = useRef<HTMLInputElement | null>(null);
  const commentRef = useRef<HTMLTextAreaElement | null>(null);

  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (
      text.length >= REVIEW_MIN_LENGTH &&
      text.length <= REVIEW_MAX_LENGTH &&
      !!rating
    ) {
      setIsDisabled(false);
    }
  }, [text, rating]);

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (ratingRef.current !== null && commentRef.current !== null) {
      const newComment = {
        rating: Number(ratingRef.current.value),
        comment: commentRef.current.value,
      };
      setIsLoading(true);
      await dispatch(postCommentAction(newComment));
      setIsLoading(false);
      if (!error) {
        commentRef.current.value = '';
      }
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
      <RatingStars
        handleClick={handleClick}
        ratingRef={ratingRef}
        disabled={isLoading}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        ref={commentRef}
        onChange={handleChange}
        disabled={isLoading}
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
          disabled={isDisabled || isLoading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
