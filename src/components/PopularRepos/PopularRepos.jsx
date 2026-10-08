import { memo } from 'react';
import RepoCard from '@/components/RepoCard/RepoCard';
import usePopularRepos from '@/hooks/usePopularRepos';
import { USERNAME } from '@/utils/constants';
import '@/components/PopularRepos/PopularRepos.css';

function PopularRepos() {
  const { data: repos, loading, error } = usePopularRepos(USERNAME);
  return (
    <section>
      <div className="popular__head">
        <h2>Popular repositories</h2>
        <a href="#pins">Customize your pins</a>
      </div>
      {loading && <p className="popular__status">Loading…</p>}
      {error && <p className="popular__status">Unable to load repositories: {error.message}</p>}
      {repos && (
        <div className="popular__grid">
          {repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
        </div>
      )}
    </section>
  );
}
export default memo(PopularRepos);
