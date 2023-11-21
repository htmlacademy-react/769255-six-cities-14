import { SetStateAction, useState } from 'react';
import { sortingTypes } from '../../../../const';

type SortingProps = {
  activeSorting: string | null;
  setActiveSorting: (textContent: SetStateAction<string | null>) => void;
};

export default function Sorting({
  activeSorting,
  setActiveSorting,
}: SortingProps) {
  const [openSorting, setOpenSorting] = useState(false);

  const handlerActiveSorting = (event: {
    currentTarget: { textContent: SetStateAction<string | null> };
  }) => {
    setActiveSorting(event.currentTarget.textContent);
    setOpenSorting(!openSorting);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setOpenSorting(!openSorting)}
      >
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {openSorting && (
        <ul className="places__options places__options--custom places__options--opened">
          {sortingTypes.map((type) => (
            <li
              className="places__option"
              tabIndex={0}
              key={type}
              onClick={handlerActiveSorting}
            >
              {type}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
