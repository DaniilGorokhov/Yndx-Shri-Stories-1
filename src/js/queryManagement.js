// Data
import allData from '../assets/data/data.json';

import renderTemplate from './renderTemplate';

export default function manageQuery() {
  const possibleThemes = ['dark', 'light'];

  const queryString = window.location.search;
  const queryStringParser = (str) => str.replace('?', '').split('&').map((item) => item.split('='));
  const parsedQueryString = queryStringParser(queryString);

  const slide = parsedQueryString.find((item) => item[0] === 'slide');
  const theme = parsedQueryString.find((item) => item[0] === 'theme');

  const neededDataIndex = slide && slide[1] < 12 ? slide[1] - 1 : 0;

  document.body.innerHTML = renderTemplate(allData[neededDataIndex].alias,
    allData[neededDataIndex].data);

  if (theme && possibleThemes.includes(theme[1])) {
    document.body.classList.add(`theme_${theme[1]}`);
  }

  window.postMessage('slideLoaded', window.location.href);
}
