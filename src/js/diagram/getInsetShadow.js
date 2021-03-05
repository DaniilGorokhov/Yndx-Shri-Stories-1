const INSET_SHADOW_1_DARK = 'rgba(255, 162, 0, 0.9)';
const INSET_SHADOW_2_DARK = 'rgba(202, 129, 0, 0.9)';
const INSET_SHADOW_3_DARK = 'rgba(139, 139, 139, 0.9)';
const INSET_SHADOW_4_DARK = 'rgba(38, 38, 38, 0.9)';

const INSET_SHADOW_1_LIGHT = 'rgba(255, 176, 57, 0.9)';
const INSET_SHADOW_2_LIGHT = 'rgba(255, 176, 57, 0.7)';
const INSET_SHADOW_3_LIGHT = 'rgba(105, 105, 105, 0.2)';
const INSET_SHADOW_4_LIGHT = 'rgba(131, 131, 131, 0.6)';

const INSET_SHADOWS_DARK = [
  INSET_SHADOW_1_DARK,
  INSET_SHADOW_2_DARK,
  INSET_SHADOW_3_DARK,
  INSET_SHADOW_4_DARK,
];

const INSET_SHADOWS_LIGHT = [
  INSET_SHADOW_1_LIGHT,
  INSET_SHADOW_2_LIGHT,
  INSET_SHADOW_3_LIGHT,
  INSET_SHADOW_4_LIGHT,
];

const INSET_SHADOWS_BLUR_DARK = [10, 15, 15, 50];
const INSET_SHADOWS_BLUR_LIGHT = [10, 1, 48, 10];

export function getInsetShadowColor(theme, pieceId) {
  if (!pieceId) return '';

  if (theme === 'dark') {
    return INSET_SHADOWS_DARK[pieceId];
  }
  if (theme === 'light') {
    return INSET_SHADOWS_LIGHT[pieceId];
  }

  throw new Error('Unknown theme');
}

export function getInsetShadowBlur(theme, pieceId) {
  if (!pieceId) return 0;

  if (theme === 'dark') {
    return INSET_SHADOWS_BLUR_DARK[pieceId];
  }
  if (theme === 'light') {
    return INSET_SHADOWS_BLUR_LIGHT[pieceId];
  }

  throw new Error('Unknown theme');
}
