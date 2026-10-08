import { memo } from 'react';
import { contributionActivity as act } from '@/data/mock';
import '@/components/ContributionActivity/ContributionActivity.css';

function ContributionActivity() {
  return (
    <section className="cact">
      <h2 className="cact__title">Contribution activity</h2>
      <h3 className="cact__month">{act.month}</h3>
      <p className="cact__line">
        Created {act.commits.count} commits in {act.commits.repos} repositories
      </p>
      <p className="cact__line">Opened {act.pullRequests.count} pull requests in {act.pullRequests.repos} repositories</p>
      <ul className="cact__list">
        {act.pullRequests.items.map((i) => (
          <li key={i.name}>
            <a href="#repo">{i.name}</a>
            <span>
              <b className="cact__merged">{i.merged}</b> merged
              {i.open != null && <> <b className="cact__open">{i.open}</b> open</>}
            </span>
          </li>
        ))}
      </ul>
      <button className="cact__more">Show more activity</button>
      <p className="cact__note">Seeing something unexpected? Take a look at the <a href="#guide">GitHub profile guide</a>.</p>
    </section>
  );
}
export default memo(ContributionActivity);
