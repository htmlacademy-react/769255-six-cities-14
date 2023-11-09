import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity, getCityOffers } from '../../store/action';

type LocationCityProps = {
  city: string;
};

function LocationCity({ city }: LocationCityProps): React.ReactNode {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);

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
