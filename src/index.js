import './scss/main.scss';
import manageQuery from './js/queryManagement';

import initVoteSlide from './js/vote/initVoteSlide';
import { voteSlideResize } from './js/vote/stretchyMargins';

import initChartSlide from './js/chart/initChartSlide';
import alignChartBlock from './js/chart/alignChartBlock';

import initDiagramSlide from './js/diagram/initDiagramSlide';

window.onload = () => {
  manageQuery();
};

// This is needed for executing js after slide loading
window.addEventListener('message', (event) => {
  const possibleMessages = ['slideLoaded'];
  if (!possibleMessages.includes(event.data)) return;

  initVoteSlide();
  initChartSlide();
  initDiagramSlide();
});

window.onresize = () => {
  voteSlideResize();
  alignChartBlock();
};
