import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks';
import { changeCity } from '../../../../store/main/main.slice';

type CityProps = {
  city: string;
};

function City({ city }: CityProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    dispatch(changeCity(event.currentTarget.textContent));
  };

  return (
    <li className="locations__item" onClick={handleClick}>
      <Link className="locations__item-link tabs__item" to="#">
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default City;
