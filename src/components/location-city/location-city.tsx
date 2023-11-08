import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { fullOffers } from '../../mocks/fullOffers';
import { changeCity, getCityOffers } from '../../store/action';
import { TOffer } from '../../types/offer';

type LocationCityProps = {
  city: string;
};

function LocationCity({ city }: LocationCityProps): React.ReactNode {
  const dispatch = useAppDispatch();
  const offers: TOffer[] = fullOffers;

  return (
    <li className="locations__item">
      <Link
        className="locations__item-link tabs__item"
        to="#"
        onClick={(event) => {
          dispatch(changeCity(event.currentTarget.textContent));
          dispatch(getCityOffers(event.currentTarget.textContent, offers));
        }}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default LocationCity;