let startPositionY;
let initialVotingAreaHeight;
let minVerticalHeight;
let minHorizontalHeight;
let scrolling = true;
let newHeight;

export function touchStart(event) {
  const peopleCardHeight = document.querySelector('.people-card').clientHeight;
  minHorizontalHeight = peopleCardHeight * 2;
  minVerticalHeight = peopleCardHeight * 3;

  if (!initialVotingAreaHeight) {
    initialVotingAreaHeight = document.querySelector('.voting-area').clientHeight;
  }

  const votingArea = document.querySelector('.voting-area');
  votingArea.setAttribute('style', `height: ${initialVotingAreaHeight}px`);

  if (event.type === 'mousedown') {
    startPositionY = event.clientY;
  } else if (event.type === 'touchstart') {
    startPositionY = event.touches[0].clientY;
  }
}

export function touchMove(event) {
  const clientWidth = window.innerWidth;
  const clientHeight = window.innerHeight;
  const aspectRatio = clientWidth / clientHeight;

  let currentPositionY;
  if (event.type === 'mousemove') {
    currentPositionY = event.clientY;
  } else if (event.type === 'touchmove') {
    currentPositionY = event.touches[0].clientY;
  }

  const maxScrollY = document.documentElement.scrollHeight - clientHeight;
  const scrollDown = window.scrollY === 0 && currentPositionY > startPositionY;
  const scrollUp = Math.round(window.scrollY) === Math.round(maxScrollY)
    && currentPositionY < startPositionY;

  if (scrollDown || scrollUp || newHeight) {
    scrolling = false;
  }

  if (!startPositionY || scrolling) return;

  const differenceY = startPositionY - currentPositionY;
  const heightMultiplier = differenceY / clientHeight;

  const heightDelta = initialVotingAreaHeight * heightMultiplier;
  if (window.scrollY) {
    newHeight = initialVotingAreaHeight + heightDelta;
  } else {
    newHeight = initialVotingAreaHeight - heightDelta;
  }

  if (aspectRatio >= 1 && newHeight < minHorizontalHeight) {
    newHeight = minHorizontalHeight;
  } else if (aspectRatio < 1 && newHeight < minVerticalHeight) {
    newHeight = minVerticalHeight;
  } else if (newHeight > 1.5 * initialVotingAreaHeight) {
    newHeight = 1.5 * initialVotingAreaHeight;
  }

  const votingArea = document.querySelector('.voting-area');
  votingArea.setAttribute('style', `height: ${newHeight}px`);

  const slide = document.querySelector('.slide');
  slide.setAttribute('style', 'overflow: hidden');
}

export function touchEnd() {
  scrolling = true;
  newHeight = null;
  startPositionY = null;
  const votingArea = document.querySelector('.voting-area');
  votingArea.setAttribute('style', `transition: height 0.15s ease-in-out; height: ${initialVotingAreaHeight}px`);

  setTimeout(() => {
    const slide = document.querySelector('.slide');
    slide.removeAttribute('style');
  }, 200);
}

export function voteSlideResize() {
  const main = document.querySelector('main');
  if (!main || main.dataset.slide !== 'vote') return;

  initialVotingAreaHeight = null;
  const votingArea = document.querySelector('.voting-area');
  votingArea.removeAttribute('style');
}
