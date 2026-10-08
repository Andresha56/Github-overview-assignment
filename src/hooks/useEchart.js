import { useEffect, useRef } from 'react';
import echarts from '@/utils/echarts';

/** Mounts an ECharts instance on the returned ref and keeps it in sync with `option`. */
export default function useEchart(option) {
  const ref = useRef(null);
  useEffect(() => {
    if (!option || !ref.current) return undefined;
    const chart = echarts.init(ref.current);
    chart.setOption(option);
    const resize = () => chart.resize();
    window.addEventListener('resize', resize);
    return () => { window.removeEventListener('resize', resize); chart.dispose(); };
  }, [option]);
  return ref;
}
