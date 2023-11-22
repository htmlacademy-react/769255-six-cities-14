import { useState } from 'react';
import { sortingTypes } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { getCityOffers, getLocations, sortOffers } from '../../../utils';
import Spinner from '../../spinner/spinner';
import Map from './map/map';
import OffersPreviewList from './offers-preview-list/offers-preview-list';
import Sorting from './sorting/sorting';

export default function Locations() {
  const activeCityName = useAppSelector((state) => state.places.activeCity);
  const offers = useAppSelector((state) => state.places.offers);
  const cityOffers = getCityOffers(offers, activeCityName);

  const city = cityOffers.find(
    (offer) => offer.city.name === activeCityName
  )?.city;

  const locations = getLocations(cityOffers);

  const [activeSorting, setActiveSorting] = useState<string | null>(
    sortingTypes[0]
  );
  const sortedOffers = sortOffers(cityOffers, activeSorting);

  const [hoverOffer, setHoverOffer] = useState<string | null>(null);
  const handleHoverOffer = (offerId: string | null) => {
    setHoverOffer(offerId);
  };
  const hoverLocation = cityOffers.find(
    (offer) => offer.id === hoverOffer
  )?.location;

  if (city === undefined) {
    return <Spinner />;
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
          <OffersPreviewList
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
