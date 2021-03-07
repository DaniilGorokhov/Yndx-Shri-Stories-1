import sureSlide from '../helpers/sureSlide';
import alignChartBlock from './alignChartBlock';
import { touchStart, touchMove, touchEnd } from './dragInteractivity';

export default function initChartSlide() {
  if (!sureSlide('chart')) return;

  const chart = document.querySelector('.chart-wrapper');
  chart.addEventListener('touchstart', touchStart);
  chart.addEventListener('mousedown', touchStart);

  chart.addEventListener('touchmove', touchMove);
  chart.addEventListener('mousemove', touchMove);

  chart.addEventListener('touchend', touchEnd);
  chart.addEventListener('mouseup', touchEnd);

  alignChartBlock();
}
