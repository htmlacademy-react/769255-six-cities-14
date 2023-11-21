import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks';
import { changeCity } from '../../../store/action';

type LocationCityProps = {
  city: string;
};

function LocationCity({ city }: LocationCityProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item">
      <Link
        className="locations__item-link tabs__item"
        to="#"
        onClick={(event) => {
          dispatch(changeCity(event.currentTarget.textContent));
        }}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default LocationCity;
