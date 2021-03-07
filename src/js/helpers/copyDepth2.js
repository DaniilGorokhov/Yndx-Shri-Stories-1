export default function copyDepth2(arr) {
  const newArr = [];
  arr.forEach((item) => newArr.push(item.slice()));

  return newArr;
}
