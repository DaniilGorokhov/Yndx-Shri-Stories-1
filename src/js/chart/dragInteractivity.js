import alignChartBlock from './alignChartBlock';

let startPositionX;
let initialMargin;

export function touchStart(event) {
  if (event.type === 'mousedown') {
    const chartBlock = document.querySelector('.chart-block');
    chartBlock.style.cursor = 'grabbing';
    startPositionX = event.clientX;
  } else if (event.type === 'touchstart') {
    startPositionX = event.touches[0].clientX;
  }

  const chartBlockItem = document.querySelector('.chart-block__item');
  initialMargin = parseFloat(window.getComputedStyle(chartBlockItem).getPropertyValue('margin-right'));
}

export function touchMove(event) {
  if (!startPositionX) return;

  const clientWidth = window.innerWidth;
  const clientHeight = window.innerHeight;
  const aspectRatio = clientWidth / clientHeight;

  let currentPositionX;
  if (event.type === 'mousemove') {
    currentPositionX = event.clientX;
  } else if (event.type === 'touchmove') {
    currentPositionX = event.touches[0].clientX;
  }

  const differenceX = currentPositionX - startPositionX;
  const marginMultiplier = differenceX / clientWidth;
  let marginDelta = initialMargin * marginMultiplier;
  if (aspectRatio >= 1 && clientWidth / 2 < startPositionX) {
    marginDelta = -marginDelta;
  }

  const newMargin = initialMargin - marginDelta;

  let minMargin = window.getComputedStyle(document.documentElement).getPropertyValue('font-size');
  minMargin = 0.5 * parseFloat(minMargin);
  if (newMargin > minMargin) {
    const chartBlockItems = document.querySelectorAll('.chart-block__item');
    Array.prototype.forEach.call(
      chartBlockItems,
      (item, index) => {
        if (index + 1 !== chartBlockItems.length || aspectRatio < 1) {
          item.setAttribute('style', `margin-right: ${newMargin}px`);
        }
      },
    );
  }
}

export function touchEnd(event) {
  if (event.type === 'mouseup') {
    const chartBlock = document.querySelector('.chart-block');
    chartBlock.style.cursor = 'grab';
  }

  startPositionX = null;
  const chartBlockItems = document.querySelectorAll('.chart-block__item');
  Array.prototype.forEach.call(chartBlockItems, (item) => {
    item.setAttribute(
      'style',
      'transition: margin-right 0.15s ease-in-out',
    );
  });

  chartBlockItems[0].ontransitionend = alignChartBlock;
}
