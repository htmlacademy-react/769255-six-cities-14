import { Link } from 'react-router-dom';

type LocationCityProps = {
  city: string;
};

function LocationCity({ city }: LocationCityProps): React.ReactNode {
  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" to="#">
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default LocationCity;
