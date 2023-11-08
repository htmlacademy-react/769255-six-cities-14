import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getLocations } from '../../utils';
import Map from '../map/map';
import OfferCard from '../offer-card/offer-card';
import Sorting from '../sorting/sorting';

//Список предложений
function OffersList() {
  const [, setActiveOfferCard] = useState<number | null>(null);
  const handleActive = (offerId: number | null) => {
    setActiveOfferCard(offerId);
  };

  const cityName = useAppSelector((state) => state.cityName);
  const cityOffers = useAppSelector((state) => state.cityOffers);
  const countOffers = cityOffers.length;
  const locations = getLocations(cityOffers);

  const city = cityOffers[0].city;

  if (city === undefined) {
    return <div>Нет данных</div>;
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {countOffers} places to stay in {cityName}
          </b>
          <Sorting />
          <div className="cities__places-list places__list tabs__content">
            {cityOffers.map((offer) => (
              <OfferCard
                offer={offer}
                key={offer.id}
                handleActive={handleActive}
              />
            ))}
          </div>{' '}
        </section>
        <div className="cities__right-section">
          <Map city={city} points={locations} />
        </div>
      </div>
    </div>
  );
}

export default OffersList;
