import allData from '../assets/data/data.json';
import faviconLight from '../assets/images/favicon-light.png';
import faviconDark from '../assets/images/favicon-dark.png';

import renderTemplate from './renderTemplate';

export default function manageQuery() {
  const possibleThemes = ['dark', 'light'];

  const queryString = window.location.search;
  const queryStringParser = (str) => str.replace('?', '').split('&').map((item) => item.split('='));
  const parsedQueryString = queryStringParser(queryString);

  const slide = parsedQueryString.find((item) => item[0] === 'slide');
  const theme = parsedQueryString.find((item) => item[0] === 'theme');
  const otherSolving = parsedQueryString.find((item) => item[0] === 'other_solving');

  let neededDataIndex;
  if (slide && slide[1] < 12 && slide[1] > 0) {
    neededDataIndex = slide[1] - 1;
  } else {
    console.info('Номер слайда указан неверно. Слайд номер 1 показывается по умолчанию');
    neededDataIndex = 0;
  }

  document.body.innerHTML = renderTemplate(allData[neededDataIndex].alias,
    allData[neededDataIndex].data);

  if (theme && possibleThemes.includes(theme[1])) {
    document.body.classList.add(`theme_${theme[1]}`);
  }

  const link = document.createElement('link');
  link.rel = 'icon';
  if (theme && theme[1] === 'light') {
    link.href = faviconLight;
  } else {
    link.href = faviconDark;
  }
  document.head.append(link);

  if (otherSolving && neededDataIndex === 8) {
    document.body.classList.add('other_solving');
  }

  window.postMessage('slideLoaded', window.location.href);
}
