// Return String for CSS clip-path polygon function to cut out
// an arc with the length, that equivalent input percent (percent of diagram circle)
export default function getClipPath(percent, degree) {
  const rectMap = [
    {
      minPercent: 0,
      coords: [100, 50],
      change: 'y',
    },
    {
      minPercent: 12.5,
      coords: [100, 100],
      change: 'x',
    },
    {
      minPercent: 25,
      coords: [50, 100],
      change: 'x',
    },
    {
      minPercent: 37.5,
      coords: [0, 100],
      change: 'y',
    },
    {
      minPercent: 50,
      coords: [0, 50],
      change: 'y',
    },
    {
      minPercent: 62.5,
      coords: [0, 0],
      change: 'x',
    },
    {
      minPercent: 75,
      coords: [50, 0],
      change: 'x',
    },
    {
      minPercent: 87.5,
      coords: [100, 0],
      change: 'y',
    },
  ];

  const pathCoords = [
    [50, 50],
  ];

  // Add middleware points
  let currentIx = 0;
  let currentPoint = rectMap[currentIx];
  while (percent > currentPoint.minPercent && currentIx < 8) {
    pathCoords.push(currentPoint.coords);
    currentIx += 1;
    currentPoint = rectMap[currentIx];
  }

  // Add new point for point between two computed points
  const restPercent = percent % 25;
  if (currentIx !== 0 && restPercent !== 0) {
    const r = 50;
    const angleRad = (degree / 180) * Math.PI;
    const x = r * Math.cos(angleRad) + 50;
    const y = r * Math.sin(angleRad) + 50;

    const lastPoint = rectMap[currentIx - 1];

    let currentCoord;
    let neededCoord;
    if (lastPoint.change === 'x') {
      [currentCoord] = lastPoint.coords;
      neededCoord = x;
    } else if (lastPoint.change === 'y') {
      [, currentCoord] = lastPoint.coords;
      neededCoord = y;
    }

    const step = 0.02 * (currentCoord > neededCoord ? -1 : 1);
    while (Math.abs(currentCoord - neededCoord) > 0.01) {
      const newOtherCord = Math.sqrt(2500 - (currentCoord - 50) * (currentCoord - 50)) + 50;
      const newCoords = [currentCoord, newOtherCord];
      pathCoords.push(newCoords);

      currentCoord += step;
    }
  }

  // Format String to template:
  // point1x% point1y%, point2x% point2y%, ...
  return pathCoords.map((pair) => `${pair[0].toFixed(3)}% ${pair[1].toFixed(3)}%`).join(', ');
}
