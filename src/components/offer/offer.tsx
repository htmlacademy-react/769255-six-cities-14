import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchOfferAction,
  fetchOfferComments,
  fetchOffersNearByAction,
} from '../../store/api-actions';
import { TOfferPreview } from '../../types/offer-preview';
import OfferPreviewCard from '../common/offer-preview-card/offer-preview-card';
import Spinner from '../common/spinner/spinner';
import NotFound from '../not-found/not-found';
import OfferImages from './offer-images/offer-images';
import Reviews from './reviews/reviews';
import { setOfferId } from '../../store/actions';

//Карточка предложения
function Offer(): JSX.Element {
  const dispatch = useAppDispatch();
  const offerId = useParams<string>().id;
  const isLoading = useAppSelector((state) => state.offer.offerIsLoadingStatus);
  const offer = useAppSelector((state) => state.offer.offer);
  const offersNearBy = useAppSelector((state) => state.offer.offersNearBy);

  useEffect(() => {
    if (offerId) {
      dispatch(setOfferId(offerId));
      dispatch(fetchOfferAction());
      dispatch(fetchOffersNearByAction());
      dispatch(fetchOfferComments());
    }
  }, [dispatch, offerId]);

  let slicedOffersNearBy: TOfferPreview[] = [];
  const countImage = offersNearBy.length;
  if (countImage > 3) {
    slicedOffersNearBy = offersNearBy.slice(0, 3);
  }

  // if (isLoading && !offer) { - почему с таким условием валится страница?
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
  } = offer;

  return (
    <>
      <Helmet>
        <title>6 cities. Offer</title>
      </Helmet>
      {isLoading ? (
        <Spinner />
      ) : (
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
                      className="offer__bookmark-button button"
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
                      <span style={{ width: '80%' }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="offer__rating-value rating__value">
                      4.8
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
              <section className="offer__map map"></section>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">
                  Other places in the neighbourhood
                </h2>
                <div className="near-places__list places__list">
                  {slicedOffersNearBy.map((offerNearBy) => (
                    <OfferPreviewCard
                      offer={offerNearBy}
                      key={offerNearBy.id}
                      handleHoverOffer={() => {}}
                    />
                  ))}
                </div>
              </section>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default Offer;
