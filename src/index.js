import './scss/main.scss';
import manageQuery from './js/queryManagement';
import { initVoteSlide, voteResize } from './js/vote';

window.onload = () => {
  manageQuery();
};

window.onresize = () => {
  voteResize();
};

// This is needed for executing js after slide loading
window.addEventListener('message', (event) => {
  const possibleMessages = ['slideLoaded'];
  if (!possibleMessages.includes(event.data)) return;

  initVoteSlide();
});
