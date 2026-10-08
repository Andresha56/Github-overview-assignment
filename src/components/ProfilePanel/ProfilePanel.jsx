import { memo } from 'react';
import { useProfile } from '@/context/ProfileContext';
import useOrganizations from '@/hooks/useOrganizations';
import { USERNAME } from '@/utils/constants';
import { profileExtras, achievements, activityOrgs } from '@/data/mock';
import '@/components/ProfilePanel/ProfilePanel.css';

function ProfilePanel() {
  const { user, loading, error } = useProfile();
  const { data: orgs } = useOrganizations(USERNAME);
  if (loading) return <aside className="profile"><div className="spinner" role="status" aria-label="Loading profile" /></aside>;
  if (error || !user) return <aside className="profile">Unable to load profile.</aside>;
  // The public orgs API omits private memberships; fall back to the orgs shown in the activity graph.
  const orgList = orgs?.length ? orgs : activityOrgs.map((o) => ({ id: o, login: o.slice(1), avatar_url: `https://github.com/${o.slice(1)}.png?size=64` }));
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
      <div className="profile__badges">{achievements.map((a) => (
          <a key={a.slug} className="profile__achievement" href={`https://github.com/${USERNAME}?tab=achievements&achievement=${a.slug}`} target="_blank" rel="noreferrer" title={a.name}>
            <img src={a.img} alt={`Achievement: ${a.name}`} />
            {a.tier && <span className="profile__tier">{a.tier}</span>}
          </a>
        ))}</div>
      <h2 className="profile__heading">Organizations</h2>
      <div className="profile__badges">{orgList.map((org) => (
          <a key={org.id} href={`https://github.com/${org.login}`} target="_blank" rel="noreferrer" title={org.login}>
            <img className="profile__org" src={org.avatar_url} alt={org.login} />
          </a>
        ))}</div>
    </aside>
  );
}
export default memo(ProfilePanel);
