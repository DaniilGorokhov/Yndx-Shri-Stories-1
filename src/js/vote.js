function getPeopleCardEmoji(elements) {
  const tmp = Array.prototype.find.call(
    elements,
    (item) => item.classList.contains('people-card__img-wrapper'),
  );
  return Array.prototype.find.call(
    tmp.children,
    (item) => item.classList.contains('people-card__emoji'),
  );
}

export function selectUser(event) {
  const oldSelected = document.querySelector('.people-card_selected');
  if (oldSelected) {
    oldSelected.classList.remove('people-card_selected');

    getPeopleCardEmoji(oldSelected.children).classList.add('people-card__emoji_hidden');
  }

  const target = event.path.find((item) => item.classList.contains('people-card'));
  target.classList.toggle('people-card_selected');

  getPeopleCardEmoji(target.children).classList.toggle('people-card__emoji_hidden');
}

function updateSlideDownParams(newOffset) {
  const slideDown = document.querySelectorAll('.voting-area__slider')[1];

  slideDown.dataset.params = JSON.stringify({
    alias: 'vote',
    data: {
      offset: +newOffset,
    },
  });
}

export function voteResize() {
  const main = document.getElementsByTagName('main');
  if (!main || !main[0] || main[0].dataset.slide !== 'vote') return;

  const peopleCards = Array.from(document.querySelectorAll('.people-card'));

  const aspectRatio = window.innerWidth / window.innerHeight;
  if (aspectRatio >= 1) {
    const horizontalLastUser = peopleCards.find((item) => item.dataset.horizontalSlideOffset);
    const { horizontalSlideOffset } = horizontalLastUser.dataset;

    updateSlideDownParams(horizontalSlideOffset);
  } else {
    const verticalLastUser = peopleCards.find((item) => item.dataset.verticalSlideOffset);
    const { verticalSlideOffset } = verticalLastUser.dataset;

    updateSlideDownParams(verticalSlideOffset);
  }
}

export function initVoteSlide() {
  const main = document.getElementsByTagName('main');
  if (!main || !main[0] || main[0].dataset.slide !== 'vote') return;

  const peopleCards = document.querySelectorAll('.people-card');
  for (let i = 0; i < peopleCards.length; i += 1) {
    peopleCards[i].addEventListener('click', selectUser);
  }

  // voteResize involving is necessary,
  // since not all browsers emit resize event after page had loaded
  voteResize();
}
