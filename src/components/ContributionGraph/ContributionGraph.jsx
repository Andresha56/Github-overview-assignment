import { memo, useMemo } from 'react';
import useContributions from '@/hooks/useContributions';
import useEchart from '@/hooks/useEchart';
import { buildHeatmapOption, HEATMAP_COLORS } from '@/utils/chartOptions';
import { USERNAME, LATEST_YEAR } from '@/utils/constants';
import { formatNumber } from '@/utils/format';
import { activityOrgs } from '@/data/mock';
import '@/components/ContributionGraph/ContributionGraph.css';

function ContributionGraph({ year }) {
  const { data, loading, error } = useContributions(USERNAME, year);
  const days = data?.contributions;
  const total = useMemo(() => days?.reduce((sum, d) => sum + d.count, 0) ?? 0, [days]);
  const option = useMemo(() => (days?.length ? buildHeatmapOption(days) : null), [days]);
  const chartRef = useEchart(option);
  const title = loading
    ? 'Loading contributions…'
    : `${formatNumber(total)} contributions in ${year === LATEST_YEAR ? 'the last year' : year}`;

  return (
    <>
    <div className="contrib__header">
      <h2 className="contrib__title">{title}</h2>
       <p className="contrib__title">Contribution Settings ↓</p>
    </div>
    <section className="contrib">
      
      {error ? <p>Unable to load contributions.</p> : (
        <div className="contrib__scroll"><div ref={chartRef} className="contrib__chart" /></div>
      )}
      <div className="contrib__legend">
        Less {HEATMAP_COLORS.map((c) => <i key={c} style={{ background: c }} />)} More
      </div>
      <div className="contrib__orgs">{activityOrgs.map((o) => <span key={o}>{o}</span>)}</div>
    </section>
    </>
  );
}
export default memo(ContributionGraph);
