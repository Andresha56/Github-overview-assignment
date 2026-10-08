import { memo } from 'react';
import '@/components/RepoCard/RepoCard.css';

function RepoCard({ repo }) {
  const { name, url, description, isPrivate, primaryLanguage, parent } = repo;
  return (
    <article className="repo">
      <div className="repo__top">
        <a className="repo__name" href={url} target="_blank" rel="noreferrer">{name}</a>
        <span className="repo__badge">{isPrivate ? 'Private' : 'Public'}</span>
      </div>
      {parent && <div className="repo__fork">Forked from <u>{parent.nameWithOwner}</u></div>}
      <p className="repo__desc">{description}</p>
      {primaryLanguage && (
        <div className="repo__lang">
          <i style={{ background: primaryLanguage.color }} />{primaryLanguage.name}
        </div>
      )}
    </article>
  );
}
export default memo(RepoCard);
