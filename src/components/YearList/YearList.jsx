import { memo } from 'react';
import { YEARS } from '@/utils/constants';
import '@/components/YearList/YearList.css';

function YearList({ selected, onSelect }) {
  return (
    <ul className="years">
      {YEARS.map((y) => (
        <li key={y}>
          <button className={`years__btn${y === selected ? ' years__btn--active' : ''}`} onClick={() => onSelect(y)}>{y}</button>
        </li>
      ))}
    </ul>
  );
}
export default memo(YearList);
