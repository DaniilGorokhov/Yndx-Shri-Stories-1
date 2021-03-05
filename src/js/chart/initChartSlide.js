import sureSlide from '../helpers/sureSlide';
import alignChartBlock from './alignChartBlock';
import { touchStart, touchMove, touchEnd } from './dragInteractivity';

export default function initChartSlide() {
  if (!sureSlide('chart')) return;

  const chartBlock = document.querySelector('.chart-block');
  chartBlock.addEventListener('touchstart', touchStart);
  chartBlock.addEventListener('mousedown', touchStart);

  chartBlock.addEventListener('touchmove', touchMove);
  chartBlock.addEventListener('mousemove', touchMove);

  chartBlock.addEventListener('touchend', touchEnd);
  chartBlock.addEventListener('mouseup', touchEnd);

  alignChartBlock();
}
