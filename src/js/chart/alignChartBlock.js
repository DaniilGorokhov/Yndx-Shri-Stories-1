export default function alignChartBlock() {
  const main = document.querySelector('main');
  if (!main || main.dataset.slide !== 'chart') return;

  const chartBlock = document.querySelector('.chart-block');
  const clientWidth = window.innerWidth;
  const clientHeight = window.innerHeight;

  if (chartBlock.scrollWidth > 0.95 * clientWidth && clientWidth / clientHeight > 1) {
    chartBlock.setAttribute('style', 'justify-content: flex-end; padding-right: 2.5vw;');
  } else {
    chartBlock.removeAttribute('style');
  }
}
