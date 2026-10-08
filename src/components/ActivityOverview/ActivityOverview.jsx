import { memo, useMemo } from 'react';
import useEchart from '@/hooks/useEchart';
import { buildRadarOption } from '@/utils/chartOptions';
import { activityOverview as overview } from '@/data/mock';
import '@/components/ActivityOverview/ActivityOverview.css';

function ActivityOverview() {
  const option = useMemo(() => buildRadarOption(overview.radar), []);
  const chartRef = useEchart(option);
  return (
    <section className="activity">
      <div className="activity__text">
        <h3>Activity overview</h3>
        
      </div>
      <div ref={chartRef} className="activity__chart" />
    </section>
  );
}
export default memo(ActivityOverview);
