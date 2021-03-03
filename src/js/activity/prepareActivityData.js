function copyDepth2(arr) {
  const newArr = [];
  arr.forEach((item) => newArr.push(item.slice()));

  return newArr;
}

function getIntervals(max) {
  const intInterval = Math.floor(max / 3);
  return [0, intInterval, 2 * intInterval, max];
}

function getIntervalIx(item, intervals) {
  let intervalIx = 0;
  for (let curIntervalIx = 0; curIntervalIx < intervals.length; curIntervalIx += 1) {
    if (item > intervals[curIntervalIx]) intervalIx += 1;
  }

  return intervalIx;
}

function simplifyMap(map, intervals) {
  const heatMapValues = ['min', 'mid', 'max', 'extra'];
  const simplifiedMap = [];

  for (let dayIx = 0; dayIx < map.length; dayIx += 1) {
    simplifiedMap.push([]);
    for (let hourIx = 0; hourIx < map[dayIx].length; hourIx += 1) {
      const valueIndex = getIntervalIx(map[dayIx][hourIx], intervals);
      simplifiedMap[dayIx].push(heatMapValues[valueIndex]);
    }
  }

  return simplifiedMap;
}

function beautifyIntervals(intervals) {
  return intervals.map(
    (item, ix) => {
      let curIntervalStart = 0;
      if (ix !== 0) {
        curIntervalStart = intervals[ix - 1] + 1;
      }

      if (curIntervalStart === item) {
        return `${item}`;
      }
      return `${curIntervalStart} — ${item}`;
    },
  );
}

// Main function
export default function prepareActivityData(data) {
  const preparedData = {
    data: {
      title: data.title,
      subtitle: data.subtitle,
    },
  };

  // Compute intervals
  let heatMap = copyDepth2(Object.values(data.data));
  let maxPerHour;
  for (let dayIx = 0; dayIx < heatMap.length; dayIx += 1) {
    for (let hourIx = 0; hourIx < heatMap[dayIx].length; hourIx += 1) {
      if (typeof maxPerHour === 'undefined') {
        maxPerHour = heatMap[dayIx][hourIx];
      } else {
        maxPerHour = Math.max(maxPerHour, heatMap[dayIx][hourIx]);
      }
    }
  }

  let intervals = getIntervals(maxPerHour);

  heatMap = simplifyMap(heatMap, intervals);
  preparedData.data.heatMap = heatMap;

  intervals = beautifyIntervals(intervals);
  preparedData.data.intervals = intervals;

  // Same actions for reduced heat map
  let reducedHeatMap = copyDepth2(Object.values(data.data));
  let maxPerTwoHour;
  for (let dayIx = 0; dayIx < reducedHeatMap.length; dayIx += 1) {
    for (let hourIx = reducedHeatMap[dayIx].length - 1; hourIx > 0; hourIx -= 2) {
      const newItem = reducedHeatMap[dayIx][hourIx] + reducedHeatMap[dayIx][hourIx - 1];

      if (typeof maxPerTwoHour === 'undefined') {
        maxPerTwoHour = newItem;
      } else {
        maxPerTwoHour = Math.max(maxPerTwoHour, newItem);
      }

      reducedHeatMap[dayIx].splice(hourIx - 1, 2, newItem);
    }
  }

  let reducedIntervals = getIntervals(maxPerTwoHour);

  reducedHeatMap = simplifyMap(reducedHeatMap, reducedIntervals);
  preparedData.data.reducedHeatMap = reducedHeatMap;

  reducedIntervals = beautifyIntervals(reducedIntervals);
  preparedData.data.reducedIntervals = reducedIntervals;

  return preparedData;
}
