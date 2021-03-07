const baseUrl = 'http://localhost:8080';

// const slideIds = [1, 3, 4, 7, 9, 10];
const slideIds = [9];
const slideAliases = {
  1: 'leaders',
  3: 'vote',
  4: 'leaders',
  7: 'chart',
  9: 'diagram',
  10: 'activity',
};

const scenarios = [];
slideIds.forEach((slideId) => {
  scenarios.push({
    label: `sl-${slideId}_${slideAliases[slideId]}_dark`,
    url: `${baseUrl}?slide=${slideId}`,
  });
  scenarios.push({
    label: `sl-${slideId}_${slideAliases[slideId]}_light`,
    url: `${baseUrl}?slide=${slideId}&theme=light`,
  });
});

module.exports = {
  id: '_',
  viewports: [
    {
      label: '376x668',
      width: 376,
      height: 668,
    },
    {
      label: '668x376',
      width: 668,
      height: 376,
    },
  ],
  scenarios,
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
