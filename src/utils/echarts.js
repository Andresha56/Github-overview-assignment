import * as echarts from 'echarts/core';
import { HeatmapChart, RadarChart } from 'echarts/charts';
import { CalendarComponent, RadarComponent, TooltipComponent, VisualMapComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([HeatmapChart, RadarChart, CalendarComponent, RadarComponent, TooltipComponent, VisualMapComponent, CanvasRenderer]);

export default echarts;
