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

function selectUser(event) {
  const oldSelected = document.querySelector('.people-card_selected');
  if (oldSelected) {
    oldSelected.classList.remove('people-card_selected');

    getPeopleCardEmoji(oldSelected.children).classList.add('people-card__emoji_hidden');
  }

  const target = event.path.find((item) => item.classList.contains('people-card'));
  if (target !== oldSelected) {
    target.classList.toggle('people-card_selected');

    getPeopleCardEmoji(target.children).classList.toggle('people-card__emoji_hidden');
  }
}

// let startPositionY = null;
// let heightModifier = 0;
// let initialVotingAreaHeight;
// let minVotingAreaHeight;

// function touchStart(event) {
// const votingArea = document.querySelector('.voting-area');
// initialVotingAreaHeight = window.getComputedStyle(votingArea).getPropertyValue('height');

// startPositionY = Math.round(event.touches[0].clientY);
// }

// function touchMove(event) {
// if (startPositionY === null) return;

// const currentPositionY = Math.round(event.touches[0].clientY);
// const votingArea = document.querySelector('.voting-area');
// const differenceY = currentPositionY - startPositionY;

// if (window.scrollY === 0) {
//   const currentHeight = parseInt(votingArea.style.height);
//   if (differenceY > 0 && 1) {
//     votingArea.style.height = `${parseInt(initialVotingAreaHeight, 10) + differenceY}px`;
//   }
// } else {
//   votingArea.style.height = `${parseInt(initialVotingAreaHeight, 10) -   differenceY}px`;
// }
// }

// function touchEnd() {
// startPositionY = null;
// const votingArea = document.querySelector('.voting-area');
// votingArea.style.height = initialVotingAreaHeight;
// }

export default function initVoteSlide() {
  const main = document.querySelector('main');
  if (!main || main.dataset.slide !== 'vote') return;

  const peopleCards = document.querySelectorAll('.people-card');
  for (let i = 0; i < peopleCards.length; i += 1) {
    peopleCards[i].addEventListener('click', selectUser);
  }

  // TODO тянущиеся отступы
  // window.addEventListener('touchstart', touchStart);
  // window.addEventListener('touchmove', touchMove);
  // window.addEventListener('touchend', touchEnd);
}
