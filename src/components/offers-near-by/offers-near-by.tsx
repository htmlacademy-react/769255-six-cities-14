import { TOfferPreview } from '../../types/offer-preview';
import OfferPreview from '../common/offer-preview/offer-preview';

type OffersNearByProps = {
  offers: TOfferPreview[];
};

export default function OffersNearBy({ offers }: OffersNearByProps) {
  return (
    <div className="container">
      <section className="offer__map map"></section>

      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => (
            <OfferPreview
              offer={offer}
              key={offer.id}
              handleHoverOffer={() => {}}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
