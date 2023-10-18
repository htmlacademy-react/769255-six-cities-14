import { Link } from 'react-router-dom';

type LocationProps = {
  city: string;
};

function Location({ city }: LocationProps): React.ReactNode {
  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" to="#">
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default Location;
