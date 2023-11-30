import { TOfferPreview } from '../../../../types/offer-preview';
import OfferPreview from '../../../common/offer-preview/offer-preview';

type OffersPreviewProps = {
  cityOffers: TOfferPreview[];
  handleHoverOffer: (offerId: string | null) => void;
};

function OffersPreview({ cityOffers, handleHoverOffer }: OffersPreviewProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cityOffers.map((offer) => (
        <OfferPreview
          offer={offer}
          key={offer.id}
          handleHoverOffer={handleHoverOffer}
        />
      ))}
    </div>
  );
}

export default OffersPreview;
