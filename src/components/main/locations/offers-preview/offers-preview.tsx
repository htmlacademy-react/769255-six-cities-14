import { TOfferPreview } from '../../../../types/offer-preview';
import OfferPreview from '../../../common/offer-preview/offer-preview';

type OffersPreviewProps = {
  cityOffers: TOfferPreview[];
  onMouseOver: (offerId: string | null) => void;
};

function OffersPreview({ cityOffers, onMouseOver }: OffersPreviewProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cityOffers.map((offer) => (
        <OfferPreview offer={offer} key={offer.id} onMouseOver={onMouseOver} />
      ))}
    </div>
  );
}

export default OffersPreview;
