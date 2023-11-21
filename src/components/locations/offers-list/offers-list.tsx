import { TOffer } from '../../../types/offer';
import OfferCard from './offer-card/offer-card';

type OffersListProps = {
  cityOffers: TOffer[];
  handleHoverOffer: (offerId: number | null) => void;
};

//Список предложений
function OffersList({ cityOffers, handleHoverOffer }: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cityOffers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          handleHoverOffer={handleHoverOffer}
        />
      ))}
    </div>
  );
}

export default OffersList;
