import { useState } from 'react';
import { TOffer } from '../../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: TOffer[];
};

export default function OffersList({ offers }: OffersListProps) {
  const [, setActiveOfferCard] = useState<number | null>(null);

  const handleActive = (offerId: number | null) => {
    setActiveOfferCard(offerId);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard offer={offer} key={offer.id} handleActive={handleActive} />
      ))}
    </div>
  );
}
