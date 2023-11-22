import { FormEvent, useRef, useState } from 'react';
import { useAppDispatch } from '../../../../hooks';
import { postCommentAction } from '../../../../store/api-actions';

// function RatingStar({ handleClick, rating }) {
//   return (
//     <>
//       <input
//         className="form__rating-input visually-hidden"
//         name="rating"
//         value={rating}
//         id={`${rating}"-stars"`}
//         type="radio"
//         onClick={handleClick}
//       />
//       <label
//         htmlFor={`${rating}"-stars"`}
//         className="reviews__rating-label form__rating-label"
//         title="perfect"
//       >
//         <svg className="form__star-image" width="37" height="33">
//           <use xlinkHref="#icon-star"></use>
//         </svg>
//       </label>
//     </>
//   );
// }

export default function ReviewFrom() {
  const dispatch = useAppDispatch();
  const ratingRef = useRef<HTMLInputElement | null>(null);
  const commentRef = useRef<HTMLTextAreaElement | null>(null);
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setRating(event.target.value);
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
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          onClick={handleClick}
          ref={ratingRef}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          onClick={handleClick}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          onClick={handleClick}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          onClick={handleClick}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          onClick={handleClick}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        //onChange={handlerChange}
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
