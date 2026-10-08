import { memo } from 'react';
import { YEARS } from '@/utils/constants';
import '@/components/YearList/YearList.css';

function YearList({ selected, onSelect }) {
  return (
    <div className="years-nav">
      <ul className="years">
        {YEARS.map((y) => (
          <li key={y}>
            <button className={`years__btn${y === selected ? ' years__btn--active' : ''}`} onClick={() => onSelect(y)}>{y}</button>
          </li>
        ))}
      </ul>
      <select className="years__select" value={selected} onChange={(e) => onSelect(Number(e.target.value))} aria-label="Contribution year">
        {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
      </select>
    </div>
  );
}
export default memo(YearList);
