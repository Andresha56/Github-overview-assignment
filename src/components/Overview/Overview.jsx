import { lazy, Suspense, useState } from 'react';
import PopularRepos from '@/components/PopularRepos/PopularRepos';
import YearList from '@/components/YearList/YearList';
import ContributionActivity from '@/components/ContributionActivity/ContributionActivity';
import { LATEST_YEAR } from '@/utils/constants';
import '@/components/Overview/Overview.css';

const ContributionGraph = lazy(() => import('../ContributionGraph/ContributionGraph'));
const ActivityOverview = lazy(() => import('../ActivityOverview/ActivityOverview'));

export default function Overview() {
  const [year, setYear] = useState(LATEST_YEAR);
  return (
    <div className="overview">
      <div className="overview__content">
        <PopularRepos />
        <div className="overview__box">
          <Suspense fallback={<div className="spinner" role="status" aria-label="Loading" />}>
            <div className="overview__contrib">
              <div className="overview__contrib-content">
                <ContributionGraph year={year} />
                <ActivityOverview />
              </div>
              <YearList selected={year} onSelect={setYear} />
            </div>
          </Suspense>
        </div>
        <ContributionActivity />
      </div>
    </div>
  );
}
