import { memo } from 'react';
import { useProfile } from '@/context/ProfileContext';
import { TABS } from '@/utils/constants';
import { profileExtras } from '@/data/mock';
import '@/components/Tabs/Tabs.css';

function Tabs({ active, onChange }) {
  const { user } = useProfile();
  const counts = { Repositories: user?.public_repos, Stars: profileExtras.stars };
  return (
    <nav className="tabs" role="tablist">
      {TABS.map((tab) => (
        <button key={tab} role="tab" aria-selected={active === tab}
          className={`tabs__tab${active === tab ? ' tabs__tab--active' : ''}`}
          onClick={() => onChange(tab)}>
          {tab}
          {counts[tab] != null && <span className="tabs__count">{counts[tab]}</span>}
        </button>
      ))}
    </nav>
  );
}
export default memo(Tabs);
