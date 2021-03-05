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
  preparedData.data.dataset = values;

  // Relative degree - value of a divider between diagram pieces - 1 deg = 1 divider
  const total = values.reduce((result, value) => result + value, 0);
  const relativeDeg = total / 360;
  preparedData.data.relativeDeg = relativeDeg;

  return preparedData;
}
