import { useState } from 'react';
import { sortingTypes } from '../../../const';
import useLocations from '../../../hooks/use-locations';
import { getLocations, sortOffers } from '../../../utils';
import Spinner from '../../common/spinner/spinner';
import Map from '../../common/map/map';
import Sorting from './sorting/sorting';
import OffersPreview from './offers-preview/offers-preview';
import LocationsEmpty from '../locations-empty/locations-empty';

export default function Locations(): JSX.Element {
  const { cityOffers, city, hasError } = useLocations();

  const [activeSorting, setActiveSorting] = useState<string | null>(
    sortingTypes[0]
  );

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

  if (hasError) {
    return <LocationsEmpty />;
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {cityOffers.length} places to stay in {city.name}
          </b>
          <Sorting
            activeSorting={activeSorting}
            setActiveSorting={setActiveSorting}
          />
          <OffersPreview
            cityOffers={sortOffers(cityOffers, activeSorting)}
            onMouseOver={handleHoverOffer}
          />
        </section>
        <div className="cities__right-section">
          <Map
            city={city}
            points={getLocations(cityOffers)}
            activeLocation={hoverLocation}
            className="cities__map"
          />
        </div>
      </div>
    </div>
  );
}
