import sureSlide from '../helpers/sureSlide';

import initDiagramBlock from './initDiagramBlock';

export default function initDiagramSlide() {
  if (!sureSlide('diagram')) return;

  initDiagramBlock();
}
