import { Link } from 'react-router-dom';
import { TOfferPreview } from '../../../types/offer-preview';
import FavoritePreview from '../favorite-preview/favorite-preview';

type FavoriteLocationProps = {
  city: string;
  cityFavoriteOffers: TOfferPreview[];
};

export default function FavoriteLocation({
  city,
  cityFavoriteOffers,
}: FavoriteLocationProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {cityFavoriteOffers.map((favorite) => (
          <FavoritePreview favorite={favorite} key={favorite.id} />
        ))}
      </div>
    </li>
  );
}
