import { useEffect, useState } from 'react';
import { sortingTypes } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCityOffers, getLocations, sortOffers } from '../../utils';
import Map from './map/map';
import OffersList from './offers-list/offers-list';
import Sorting from './sorting/sorting';
import { fetchOffers } from '../../store/api-actions';
import Spinner from '../spinner/spinner';

export default function Locations() {
  const activeCityName = useAppSelector((state) => state.activeCity);

  const dispatch = useAppDispatch;
  useEffect(() => {
    dispatch(fetchOffers()); //тут ошибка из-за количества аргументов
  }, []);

  const offers = useAppSelector((state) => state.offers);
  const status = useAppSelector((state) => state.isLoading);
  if (status) {
    return <Spinner />;
  }

  const cityOffers = getCityOffers(offers, activeCityName);

  const city = cityOffers.find(
    (offer) => offer.city.name === activeCityName
  )?.city;

  const locations = getLocations(cityOffers);
  const [activeSorting, setActiveSorting] = useState<string | null>(
    sortingTypes[0]
  );
  const sortedOffers = sortOffers(cityOffers, activeSorting);

  const [hoverOffer, setHoverOffer] = useState<number | null>(null);
  const handleHoverOffer = (offerId: number | null) => {
    setHoverOffer(offerId);
  };
  const hoverLocation = cityOffers.find(
    (offer) => offer.id === hoverOffer
  )?.location;

  if (city === undefined) {
    return <div>Нет данных</div>;
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {cityOffers.length} places to stay in {activeCityName}
          </b>
          <Sorting
            activeSorting={activeSorting}
            setActiveSorting={setActiveSorting}
          />
          <OffersList
            cityOffers={sortedOffers}
            handleHoverOffer={handleHoverOffer}
          />
        </section>
        <div className="cities__right-section">
          <Map city={city} points={locations} activeLocation={hoverLocation} />
        </div>
      </div>
    </div>
  );
}
