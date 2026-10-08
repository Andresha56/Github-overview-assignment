import { memo } from 'react';
import { useProfile } from '@/context/ProfileContext';
import useOrganizations from '@/hooks/useOrganizations';
import { USERNAME } from '@/utils/constants';
import { profileExtras, achievements } from '@/data/mock';
import '@/components/ProfilePanel/ProfilePanel.css';

function ProfilePanel() {
  const { user, loading, error } = useProfile();
  const { data: orgs } = useOrganizations(USERNAME);
  if (loading) return <aside className="profile">Loading…</aside>;
  if (error || !user) return <aside className="profile">Unable to load profile.</aside>;
  const details = [
    ['🏢', user.company?.replace('@', '')],
    ['📍', user.location],
    ['✉️', user.email],
    ['🔗', user.blog],
    ['in', profileExtras.linkedin],
    ['𝕏', user.twitter_username && `@${user.twitter_username}`]
  ].filter(([, v]) => v);
  return (
    <aside className="profile">
      <img className="profile__avatar" src={user.avatar_url} alt={user.login} />
      <h1 className="profile__name">{user.name}</h1>
      <div className="profile__login">{user.login}</div>
      <p className="profile__bio">{user.bio}</p>
      <button className="profile__edit">Edit profile</button>
      <div className="profile__follow">
        👥 <strong>{user.followers}</strong> followers · <strong>{user.following}</strong> following
      </div>
      <ul className="profile__details">
        {details.map(([icon, text]) => (
          <li key={icon}><span>{icon}</span>{text}</li>
        ))}
      </ul>
      <h2 className="profile__heading">Achievements</h2>
      <div className="profile__badges">{achievements.map((a) => <span key={a}>{a}</span>)}</div>
      <h2 className="profile__heading">Organizations</h2>
      <div className="profile__badges">{orgs?.map((org) => (
          <a key={org.id} href={`https://github.com/${org.login}`} target="_blank" rel="noreferrer" title={org.login}>
            <img className="profile__org" src={org.avatar_url} alt={org.login} />
          </a>
        ))}</div>
    </aside>
  );
}
export default memo(ProfilePanel);
