import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { sortingTypes } from '../../const';
import { useAppSelector } from '../../hooks';
import { getLocations, sortOffers } from '../../utils';
import LocationCities from '../location-cities/location-cities';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import Sorting from '../sorting/sorting';

function Main(): React.ReactNode {
  const cityOffers = useAppSelector((state) => state.cityOffers);
  const countOffers = cityOffers.length;

  const activeCityName = useAppSelector((state) => state.activeCity);
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
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          <LocationCities />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {countOffers} places to stay in {activeCityName}
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
                <Map
                  city={city}
                  points={locations}
                  activeLocation={hoverLocation}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Main;
