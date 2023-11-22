import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../../const';
import { useAppDispatch } from '../../../../../hooks';
import { setOfferId } from '../../../../../store/actions';
import { TOfferPreview } from '../../../../../types/offer-preview';

type OfferCardProps = {
  offer: TOfferPreview;
  handleHoverOffer: (offerId: string | null) => void;
};

//Карточка предложения
function OfferPreviewCard({ offer, handleHoverOffer }: OfferCardProps) {
  const dispatch = useAppDispatch();
  const handleClickOffer = () => {
    dispatch(setOfferId(offer.id));
  };

  return (
    <Link to={`${AppRoute.Offers}/${offer.id}`}>
      <article
        className="cities__card place-card"
        onMouseOver={() => handleHoverOffer(offer.id)}
        onClick={handleClickOffer}
      >
        {offer.isPremium && (
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
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className="place-card__bookmark-button button"
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
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">{offer.title}</h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    </Link>
  );
}

export default OfferPreviewCard;
