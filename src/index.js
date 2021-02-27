import './scss/main.scss';
import manageQuery from './js/queryManagement';
import { initVoteSlide } from './js/vote';

window.onload = () => {
  manageQuery();
};

// This is needed for executing js after slide loading
window.addEventListener('message', (event) => {
  const possibleMessages = ['slideLoaded'];
  if (!possibleMessages.includes(event.data)) return;

  initVoteSlide();
});
