import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { HelmetTitles } from '../../const';
import useOffer from '../../hooks/use-offer';
import OfferPreview from '../common/offer-preview/offer-preview';
import Spinner from '../common/spinner/spinner';
import NotFound from '../not-found/not-found';
import OfferImages from './offer-images/offer-images';
import Reviews from '../reviews/reviews';
import Map from '../common/map/map';
import { getLocations } from '../../utils';
import { useState } from 'react';

function Offer(): JSX.Element {
  const offerId = useParams<string>().id;
  const { isLoading, offer, slicedOffersNearBy } = useOffer(offerId);
  const [hoverOffer, setHoverOffer] = useState<string | null>(null);
  const handleHoverOffer = (offerId: string | null) => {
    setHoverOffer(offerId);
  };
  const hoverLocation = slicedOffersNearBy.find(
    (offer) => offer.id === hoverOffer
  )?.location;

  if (isLoading) {
    return <Spinner />;
  }

  if (!offer) {
    return <NotFound />;
  }
  const {
    images,
    title,
    isPremium,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    rating,
    city,
    isFavorite,
  } = offer;

  const ratingStar = (Math.ceil(rating) * 20).toString();

  return (
    <>
      <Helmet>
        <title>{HelmetTitles.Offer}</title>
      </Helmet>

      <div className="page">
        <main className="page__main page__main--offer">
          <section className="offer">
            <OfferImages images={images} />
            <div className="offer__container container">
              <div className="offer__wrapper">
                {isPremium && (
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">{title}</h1>
                  <button
                    className={
                      isFavorite
                        ? 'offer__bookmark-button offer__bookmark-button--active button'
                        : 'offer__bookmark-button button'
                    }
                    type="button"
                  >
                    <svg
                      className="offer__bookmark-icon"
                      width="31"
                      height="33"
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{ width: `${ratingStar}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">
                    {Math.ceil(rating)}
                  </span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {goods.map((good) => (
                      <li className="offer__inside-item" key={good}>
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="offer__avatar user__avatar"
                        src={host.avatarUrl}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="offer__user-name">{host.name}</span>
                    <span className="offer__user-status">
                      {host.isPro && 'Pro'}
                    </span>
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">{description}</p>
                  </div>
                </div>
                <Reviews />
              </div>
            </div>
            <Map
              city={city}
              points={getLocations(slicedOffersNearBy)}
              activeLocation={hoverLocation}
              className="offer__map"
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                {slicedOffersNearBy.map((offerNearBy) => (
                  <OfferPreview
                    offer={offerNearBy}
                    key={offerNearBy.id}
                    handleHoverOffer={handleHoverOffer}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default Offer;
