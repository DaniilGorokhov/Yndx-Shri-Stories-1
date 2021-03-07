import getClipPath from './getClipPath';

export default function prepareDiagramData(data) {
  const preparedData = {
    data: {
      title: data.title,
      subtitle: data.subtitle,
      totalText: data.totalText,
      differenceText: data.differenceText,
    },
  };

  // Values and categories
  const values = [];
  const preparedCategories = [];
  for (let categoryId = 0; categoryId < data.categories.length; categoryId += 1) {
    const category = data.categories[categoryId];

    const value = parseFloat(category.valueText);
    const differenceValue = parseFloat(category.differenceText);
    const difference = differenceValue > 0 ? `+${differenceValue}` : `${differenceValue}`;
    preparedCategories.push({
      title: category.title,
      value,
      difference,
    });

    values.push(value);
  }

  preparedData.data.categories = preparedCategories;

  // Compute dataset
  const dataset = [];

  // Note: degreeNum - total relative number, which equivalent 1 deg
  const total = values.reduce((result, value) => result + value, 0);
  const degreeNum = total / 356;

  let startDegree = 0;
  for (let valueIx = 0; valueIx < values.length; valueIx += 1) {
    // We can't divide value by total, because we don't take into account dividers
    const valueInDegree = values[valueIx] / degreeNum;
    // In percent is a number between 0 and 100
    const valueInPercent = (values[valueIx] / total) * 100;

    dataset.push({
      clipPathParams: getClipPath(valueInPercent, valueInDegree),
      rotateDeg: startDegree,
    });

    startDegree += valueInDegree + 1;
  }

  preparedData.data.dataset = dataset;

  return preparedData;
}
