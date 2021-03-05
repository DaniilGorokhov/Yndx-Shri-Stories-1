import Chart from 'chart.js';
import 'chartjs-plugin-style';

import getGradient from './getGradient';
import { getInsetShadowColor, getInsetShadowBlur } from './getInsetShadow';
import {
  getShadowColor, getShadowBlur, getShadowOffsetX, getShadowOffsetY,
} from './getShadow';

export default function initDiagramBlock() {
  const canvases = document.querySelectorAll('canvas');
  const charts = [];

  const { relativeDeg } = canvases[0].dataset;
  const values = JSON.parse(canvases[0].dataset.values);
  const diagramData = values.map((value) => [value, +relativeDeg]).flat();

  for (let canvasId = 0; canvasId < canvases.length; canvasId += 1) {
    const canvas = canvases[canvasId];
    const ctx = canvas.getContext('2d');

    const { theme } = canvas.dataset;

    const backgroundColors = [];

    const insetShadowsColors = [];
    const insetShadowsBlur = [];

    const standardShadowColors = [];
    const standardShadowOffsetX = [];
    const standardShadowOffsetY = [];
    const standardShadowBlurs = [];

    const borderColors = [
      'rgba(255, 239, 153, 0.8)', 'transparent',
      'rgba(255, 239, 153, 0.7)', 'transparent',
      'rgba(203, 203, 203, 0.5)', 'transparent',
      'rgba(228, 228, 228, 0.5)', 'transparent',
    ];

    const pieceIds = [0, false, 1, false, 2, false, 3, false];
    for (let pieceIdIx = 0; pieceIdIx < pieceIds.length; pieceIdIx += 1) {
      const pieceId = pieceIds[pieceIdIx];
      backgroundColors.push(getGradient(ctx, theme, pieceId));

      insetShadowsColors.push(getInsetShadowColor(theme, pieceId));
      insetShadowsBlur.push(getInsetShadowBlur(theme, pieceId));

      standardShadowColors.push(getShadowColor(theme, pieceId));
      standardShadowOffsetX.push(getShadowOffsetX(theme, pieceId));
      standardShadowOffsetY.push(getShadowOffsetY(theme, pieceId));
      standardShadowBlurs.push(getShadowBlur(theme, pieceId));
    }

    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: diagramData,
            borderWidth: theme === 'dark' ? 0 : 1,
            borderAlign: 'inner',
            borderColor: theme === 'dark' ? [] : borderColors,

            backgroundColor: backgroundColors,

            bevelShadowColor: insetShadowsColors,
            bevelWidth: insetShadowsBlur,

            shadowColor: standardShadowColors,
            shadowOffsetX: standardShadowOffsetX,
            shadowOffsetY: standardShadowOffsetY,
            shadowBlur: standardShadowBlurs,
          },
        ],
      },
      options: {
        cutoutPercentage: 70,
        maintainAspectRatio: false,
        rotation: -0.66 * Math.PI,
        events: [],
        animation: {
          animateRotate: false,
        },
      },
    });
    charts.push(chart);
  }
}
