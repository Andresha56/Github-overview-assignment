export const HEATMAP_COLORS = [
  '#ebedf0',
  '#9be9a8',
  '#40c463',
  '#30a14e',
  '#216e39',
];

export const buildHeatmapOption = (days) => ({
  tooltip: {
    formatter: ({ value }) =>
      `${value[2]} contributions on ${value[0]}`,
  },

  visualMap: {
    show: false,
    type: 'piecewise',
    dimension: 1,
    pieces: HEATMAP_COLORS.map((color, value) => ({
      value,
      color,
    })),
  },

  calendar: {
    range: [days[0].date, days[days.length - 1].date],
    cellSize: ['auto', 11],

    left: 30,
    right: 5,
    top: 20,

    itemStyle: {
      borderWidth: 2,
      borderColor: '#fff',
    },

    splitLine: {
      show: false,
    },

    yearLabel: {
      show: false,
    },

    monthLabel: {
      nameMap: 'en',
    },

    dayLabel: {
      firstDay: 0,
      nameMap: ['', 'Mon', '', 'Wed', '', 'Fri', ''],
    },
  },

  series: [
    {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: days.map((day) => [
        day.date,
        day.level,
        day.count,
      ]),
    },
  ],
});

export const buildRadarOption = ({
  commits,
  pullRequests,
  issues,
  codeReview,
}) => ({
  radar: {
    // radius: '55%',
    splitNumber: 1,

    axisName: {
      color: '#59636e',
    },

    axisLine: {
      lineStyle: {
        color: '#30a14e',
      },
    },


    indicator: [
      {
        name: 'Code review',
        max: 100,
      },
      {
        name: `${commits}%\nCommits`,
        max: 100,
      },
      {
        name: `${pullRequests}%\nPull requests`,
        max: 100,
      },
      {
        name: 'Issues',
        max: 100,
      },


    ],
  },

  series: [
    {
      type: 'radar',

      data: [
        {
          value: [
            codeReview,
            commits,
            pullRequests,
            issues,
          ],

          areaStyle: {
            color: '#40c46355',
          },

          lineStyle: {
            opacity: 0,
          },
          symbol: 'circle',
          symbolSize: 6,

          itemStyle: {
            color: '#30a14e',
          },
          

        },
      ],
    },
  ],
});