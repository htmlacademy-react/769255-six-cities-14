import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppDispatch } from '../../../hooks';
import { TOfferPreview } from '../../../types/offer-preview';
import { getCountStars } from '../../../utils';
import { addFavoriteFromMainAction } from '../../../store/main/main.api-actions';

type OfferPreviewProps = {
  offer: TOfferPreview;
  onMouseOver: (offerId: string | null) => void;
};

function OfferPreview({ offer, onMouseOver }: OfferPreviewProps) {
  const { id, rating, isPremium, price, title, type, isFavorite } = offer;

  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  const dispatch = useAppDispatch();

  const handleClickBookmark = () => {
    dispatch(
      addFavoriteFromMainAction({ status: Number(!isFavoriteState), id })
    );
    setIsFavoriteState(!isFavoriteState);
  };

  const ratingStar = getCountStars(rating);

  return (
    <article className="cities__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <Link to={`${AppRoute.Offers}/${id}`}>
        <div
          className="cities__image-wrapper place-card__image-wrapper"
          onMouseOver={() => onMouseOver(id)}
        >
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </div>
      </Link>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={
              isFavoriteState
                ? 'place-card__bookmark-button--active button'
                : 'place-card__bookmark-button button'
            }
            type="button"
            onClick={handleClickBookmark}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingStar}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">{title}</h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferPreview;
