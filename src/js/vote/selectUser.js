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

export default function selectUser(event) {
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
