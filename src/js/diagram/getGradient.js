// Params
const BG_GRADIENT_DARK_1_PARAMS = [120, 120, 0, 120, 120, 107];
const BG_GRADIENT_DARK_2_PARAMS = [120, 120, 0, 120, 120, 120];
const BG_GRADIENT_DARK_3_PARAMS = [120, 120, 0, 120, 120, 110];
const BG_GRADIENT_DARK_4_PARAMS = [120, 120, 0, 120, 120, 110];

const BG_GRADIENT_LIGHT_1_PARAMS = [120, 120, 0, 120, 120, 113];
const BG_GRADIENT_LIGHT_2_PARAMS = [120, 120, 0, 120, 120, 113];
const BG_GRADIENT_LIGHT_3_PARAMS = [120, 120, 0, 120, 120, 116];
const BG_GRADIENT_LIGHT_4_PARAMS = [120, 120, 0, 120, 120, 116];

const BG_GRADIENTS_DARK_PARAMS = [
  BG_GRADIENT_DARK_1_PARAMS,
  BG_GRADIENT_DARK_2_PARAMS,
  BG_GRADIENT_DARK_3_PARAMS,
  BG_GRADIENT_DARK_4_PARAMS,
];

const BG_GRADIENTS_LIGHT_PARAMS = [
  BG_GRADIENT_LIGHT_1_PARAMS,
  BG_GRADIENT_LIGHT_2_PARAMS,
  BG_GRADIENT_LIGHT_3_PARAMS,
  BG_GRADIENT_LIGHT_4_PARAMS,
];

// Stops
const BG_GRADIENT_DARK_1_STOPS = [
  [0.7188, 'rgba(255, 163, 0, 0.9)'],
  [1, 'rgba(91, 58, 0, 0.8)'],
];
const BG_GRADIENT_DARK_2_STOPS = [
  [0.7292, 'rgba(99, 63, 0, 0.5)'],
  [1, 'rgba(15, 9, 0, 0.5)'],
];
const BG_GRADIENT_DARK_3_STOPS = [
  [0.7188, 'rgba(155, 155, 155, 0.5)'],
  [1, 'rgba(56, 41, 0, 0.5)'],
];
const BG_GRADIENT_DARK_4_STOPS = [
  [0.7188, 'rgba(77, 77, 77, 0.5)'],
  [1, 'rgba(56, 41, 0, 0.5)'],
];

const BG_GRADIENT_LIGHT_1_STOPS = [
  [0.8125, 'rgba(255, 184, 0, 0.56)'],
  [1, 'rgba(255, 239, 153, 0.32)'],
];
const BG_GRADIENT_LIGHT_2_STOPS = [
  [0.8125, 'rgba(255, 184, 0, 0.24)'],
  [1, 'rgba(255, 239, 153, 0.12)'],
];
const BG_GRADIENT_LIGHT_3_STOPS = [
  [0.8281, 'rgba(166, 166, 166, 0.1725)'],
  [1, 'rgba(203, 203, 203, 0.07)'],
];
const BG_GRADIENT_LIGHT_4_STOPS = [
  [0.8281, 'rgba(191, 191, 191, 0.4)'],
  [1, 'rgba(228, 228, 228, 0.1)'],
];

const BG_GRADIENTS_DARK_STOPS = [
  BG_GRADIENT_DARK_1_STOPS,
  BG_GRADIENT_DARK_2_STOPS,
  BG_GRADIENT_DARK_3_STOPS,
  BG_GRADIENT_DARK_4_STOPS,
];
const BG_GRADIENTS_LIGHT_STOPS = [
  BG_GRADIENT_LIGHT_1_STOPS,
  BG_GRADIENT_LIGHT_2_STOPS,
  BG_GRADIENT_LIGHT_3_STOPS,
  BG_GRADIENT_LIGHT_4_STOPS,
];

function addGradientStops(gradient, theme, pieceId) {
  let stops;
  if (theme === 'dark') {
    stops = BG_GRADIENTS_DARK_STOPS[pieceId];
  } else if (theme === 'light') {
    stops = BG_GRADIENTS_LIGHT_STOPS[pieceId];
  }

  for (let stopIx = 0; stopIx < stops.length; stopIx += 1) {
    gradient.addColorStop(...stops[stopIx]);
  }
}

export default function getGradient(ctx, theme, pieceId) {
  if (pieceId === false) return 'transparent';

  let params;
  if (theme === 'dark') {
    const diagramWidth = document.querySelector('.diagram-block__body').clientWidth;

    const tmp = BG_GRADIENTS_DARK_PARAMS[pieceId];
    params = tmp.map((item) => (diagramWidth / 240) * item);
  } else if (theme === 'light') {
    const diagramWidth = document.querySelector('.diagram-block__body.diagram-block__body_light').clientWidth;

    const tmp = BG_GRADIENTS_LIGHT_PARAMS[pieceId];
    params = tmp.map((item) => (diagramWidth / 240) * item);
  }

  const backgroundGradient = ctx.createRadialGradient(...params);
  addGradientStops(backgroundGradient, theme, pieceId);

  return backgroundGradient;
}
