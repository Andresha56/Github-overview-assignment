import { memo } from 'react';
import { useProfile } from '@/context/ProfileContext';
import '@/components/Header/Header.css';

function Header() {
  const { user } = useProfile();
  return (
    <header className="header">
      <span className="header__logo">⬤</span>
      <strong className="header__user">{user?.login}</strong>
      <input className="header__search" placeholder="Type / to search" aria-label="Search" />
      {user && <img className="header__avatar" src={user.avatar_url} alt="" />}
    </header>
  );
}
export default memo(Header);
