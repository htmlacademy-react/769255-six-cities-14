import { TOfferImages } from '../../../types/offer';

type OfferImagesProps = {
  images: TOfferImages;
};

function OfferImages({ images }: OfferImagesProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.slice(0, 6).map((image) => (
          <div className="offer__image-wrapper" key={image}>
            <img className="offer__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferImages;
