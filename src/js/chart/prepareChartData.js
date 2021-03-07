export default function prepareChartData(data) {
  const preparedData = {
    data: {
      title: data.title,
      subtitle: data.subtitle,
    },
  };

  const users = [];
  data.users.forEach((user) => {
    const preparedUser = {
      name: user.name,
      avatar: user.avatar,
      valueText: user.valueText,
    };

    users.push(preparedUser);
  });

  preparedData.data.users = users;

  // Shorthand
  const { values } = data;

  let preparedValues = values.slice();

  let activeValueIx;
  for (let valueIx = 0; valueIx < preparedValues.length; valueIx += 1) {
    if (preparedValues[valueIx].active) {
      activeValueIx = valueIx;
    } else {
      preparedValues[valueIx].active = false;
    }
  }

  const startIx = activeValueIx >= 6 ? activeValueIx - 6 : 0;

  const selectedValues = activeValueIx >= 6 ? 7 : activeValueIx + 1;

  const needSelect = 9 - selectedValues > 2 ? 2 : 9 - selectedValues;
  const endIx = activeValueIx + 1 + needSelect;

  preparedValues = preparedValues.slice(startIx, endIx);

  let maxValue = null;
  for (let valueIx = 0; valueIx < preparedValues.length; valueIx += 1) {
    if (maxValue === null) {
      maxValue = preparedValues[valueIx].value;
    } else {
      maxValue = Math.max(maxValue, preparedValues[valueIx].value);
    }
  }

  // Compute height percentage
  for (let valueIx = 0; valueIx < preparedValues.length; valueIx += 1) {
    // max 63.15625 - because of inaccuracy
    preparedValues[valueIx].heightValueVert = 63.15625
      * (preparedValues[valueIx].value / maxValue);
    // max 62.84946236 - because of inaccuracy
    preparedValues[valueIx].heightValueHoriz = 62.84946236
      * (preparedValues[valueIx].value / maxValue);
  }

  preparedData.data.values = preparedValues;

  return preparedData;
}
