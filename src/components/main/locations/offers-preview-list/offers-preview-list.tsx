import { TOfferPreview } from '../../../../types/offer-preview';
import OfferPreviewCard from '../../../common/offer-preview-card/offer-preview-card';

type OffersListProps = {
  cityOffers: TOfferPreview[];
  handleHoverOffer: (offerId: string | null) => void;
};

function OffersPreviewList({ cityOffers, handleHoverOffer }: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cityOffers.map((offer) => (
        <OfferPreviewCard
          offer={offer}
          key={offer.id}
          handleHoverOffer={handleHoverOffer}
        />
      ))}
    </div>
  );
}

export default OffersPreviewList;
