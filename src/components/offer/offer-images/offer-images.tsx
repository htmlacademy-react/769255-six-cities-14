import { TOfferImages } from '../../../types/offer';

type OfferImagesProps = {
  images: TOfferImages;
};

function OfferImages({ images }: OfferImagesProps): JSX.Element {
  const countImage = images.length;
  let slicedImages: TOfferImages | [] = [];
  if (countImage > 6) {
    slicedImages = images.slice(0, 6);
  }

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {slicedImages.map((image) => (
          <div className="offer__image-wrapper" key={image}>
            <img className="offer__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferImages;
