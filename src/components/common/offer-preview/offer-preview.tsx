import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppDispatch } from '../../../hooks';
import { TOfferPreview } from '../../../types/offer-preview';
import { setOfferId } from '../../../store/offer/offer.slice';

type OfferCardProps = {
  offer: TOfferPreview;
  handleHoverOffer: (offerId: string | null) => void;
};

function OfferPreviewCard({ offer, handleHoverOffer }: OfferCardProps) {
  const { id, rating, isPremium, price, title, type, isFavorite } = offer;

  const dispatch = useAppDispatch();
  const handleClickOffer = () => {
    dispatch(setOfferId(id));
  };

  const ratingStar = (Math.ceil(rating) * 20).toString();

  return (
    <Link to={`${AppRoute.Offers}/${id}`}>
      <article
        className="cities__card place-card"
        onMouseOver={() => handleHoverOffer(id)}
        onClick={handleClickOffer}
      >
        {isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={
                isFavorite
                  ? 'place-card__bookmark-button--active button'
                  : 'place-card__bookmark-button button'
              }
              type="button"
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
    </Link>
  );
}

export default OfferPreviewCard;
