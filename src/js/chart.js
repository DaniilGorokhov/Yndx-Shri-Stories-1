let startPositionX;
let initialMargin;

function touchStart(event) {
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

function touchMove(event) {
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

  const differenceX = -(startPositionX - currentPositionX);
  const marginMultiplier = differenceX / clientWidth;
  let marginDelta = initialMargin * marginMultiplier;
  if (aspectRatio >= 1) marginDelta = -Math.abs(marginDelta);

  const newMargin = initialMargin - marginDelta;

  if (newMargin > 0) {
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

function touchEnd(event) {
  if (event.type === 'mouseup') {
    const chartBlock = document.querySelector('.chart-block');
    chartBlock.style.cursor = 'grab';
  }

  startPositionX = null;
  const chartBlockItems = document.querySelectorAll('.chart-block__item');
  Array.prototype.forEach.call(chartBlockItems, (item) => {
    item.setAttribute(
      'style',
      'transition: margin-right .15s ease-in-out',
    );
  });
}

export default function initChartSlide() {
  const main = document.querySelector('main');
  if (!main || main.dataset.slide !== 'chart') return;

  const chartBlock = document.querySelector('.chart-block');
  chartBlock.addEventListener('touchstart', touchStart);
  chartBlock.addEventListener('mousedown', touchStart);

  chartBlock.addEventListener('touchmove', touchMove);
  chartBlock.addEventListener('mousemove', touchMove);

  chartBlock.addEventListener('touchend', touchEnd);
  chartBlock.addEventListener('mouseup', touchEnd);
}
