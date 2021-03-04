import selectUser from './selectUser';
import {
  touchStart, touchMove, touchEnd,
} from './stretchyMargins';

export default function initVoteSlide() {
  const main = document.querySelector('main');
  if (!main || main.dataset.slide !== 'vote') return;

  const peopleCards = document.querySelectorAll('.people-card');
  for (let i = 0; i < peopleCards.length; i += 1) {
    peopleCards[i].addEventListener('click', selectUser);
  }

  window.addEventListener('touchstart', touchStart);
  window.addEventListener('mousedown', touchStart);

  window.addEventListener('touchmove', touchMove);
  window.addEventListener('mousemove', touchMove);

  window.addEventListener('touchend', touchEnd);
  window.addEventListener('mouseup', touchEnd);
}
