// Only data GitHub exposes no API for lives here.
export const profileExtras = { linkedin: 'in/shreeramkushwaha', stars: 6 };
const BADGES = 'https://github.githubassets.com/assets';
export const achievements = [
  { slug: 'pull-shark', name: 'Pull Shark', img: `${BADGES}/pull-shark-gold-90985540b385.png`, tier: 'x4' },
  { slug: 'quickdraw', name: 'Quickdraw', img: `${BADGES}/quickdraw-default-39c6aec8ff89.png` },
  { slug: 'yolo', name: 'YOLO', img: `${BADGES}/yolo-default-be0bbff04951.png` }
];
export const activityOrgs = ['@UptimeAI', '@timescale'];
export const activityOverview = {
  repos: ['UptimeAI/uptime_webapp', 'UptimeAI/uptime_server', 'UptimeAI/uptime_ml'],
  others: 13,
  radar: { commits: 83, pullRequests: 17, issues: 0, codeReview: 0 }
};
export const contributionActivity = {
  month: 'October 2026',
  commits: { count: 56, repos: 11 },
  pullRequests: {
    count: 29, repos: 5,
    items: [
      { name: 'UptimeAI/uptime_webapp', merged: 16, open: 1 },
      { name: 'UptimeAI/uptime_ml', merged: 6 },
      { name: 'UptimeAI/uptime_scripts', merged: 4 },
      { name: 'UptimeAI/uptime_engine', merged: 1 },
      { name: 'UptimeAI/uptime_ml_encrypted', merged: 1 }
    ]
  }
};
