const SHADOW_1_DARK = 'rgba(248, 158, 0, 0.2)';
const SHADOW_2_DARK = 'rgba(147, 93, 0, 0.2)';
const SHADOW_3_DARK = 'rgba(0, 0, 0, 0.2)';
const SHADOW_4_DARK = 'rgba(96, 96, 96, 0.2)';

// const SHADOW_1_LIGHT = 'rgba(248, 158, 0, 0.2)';
// const SHADOW_2_LIGHT = 'rgba(147, 93, 0, 0.2)';
// const SHADOW_3_LIGHT = 'rgba(0, 0, 0, 0.2)';
// const SHADOW_4_LIGHT = 'rgba(96, 96, 96, 0.2)';

const SHADOWS_DARK = [
  SHADOW_1_DARK,
  SHADOW_2_DARK,
  SHADOW_3_DARK,
  SHADOW_4_DARK,
];

// const SHADOWS_LIGHT = [
//   SHADOW_1_LIGHT,
//   SHADOW_2_LIGHT,
//   SHADOW_3_LIGHT,
//   SHADOW_4_LIGHT,
// ];

const SHADOWS_BLUR_DARK = [20, 20, 20, 20];
// const SHADOWS_BLUR_LIGHT = [20, 20, 20, 20];

const SHADOW_OFFSETS_X_DARK = [0, 0, 0, 0];
// const SHADOW_OFFSETS_X_LIGHT = [0, 0, 0, 0];

const SHADOW_OFFSETS_Y_DARK = [0, 0, 0, 0];
// const SHADOW_OFFSETS_Y_LIGHT = [0, 0, 0, 0];

export function getShadowColor(theme, pieceId) {
  if (!pieceId) return '';

  if (theme === 'dark') {
    return SHADOWS_DARK[pieceId];
  }
  if (theme === 'light') {
    return '';
    // return SHADOWS_LIGHT[pieceId];
  }

  throw new Error('Unknown theme');
}

export function getShadowBlur(theme, pieceId) {
  if (!pieceId) return 0;

  if (theme === 'dark') {
    const diagramWidth = document.querySelector('.diagram-block__body').clientWidth;

    const tmp = SHADOWS_BLUR_DARK[pieceId];
    return tmp * (diagramWidth / 240);
  }
  if (theme === 'light') {
    return 0;
    // return SHADOWS_BLUR_LIGHT[pieceId];
  }

  throw new Error('Unknown theme');
}

export function getShadowOffsetX(theme, pieceId) {
  if (!pieceId) return 0;

  if (theme === 'dark') {
    return SHADOW_OFFSETS_X_DARK[pieceId];
  }
  if (theme === 'light') {
    return 0;
    // return SHADOW_OFFSETS_X_LIGHT[pieceId];
  }

  throw new Error('Unknown theme');
}

export function getShadowOffsetY(theme, pieceId) {
  if (!pieceId) return 0;

  if (theme === 'dark') {
    return SHADOW_OFFSETS_Y_DARK[pieceId];
  }
  if (theme === 'light') {
    return 0;
    // return SHADOW_OFFSETS_Y_LIGHT[pieceId];
  }

  throw new Error('Unknown theme');
}
