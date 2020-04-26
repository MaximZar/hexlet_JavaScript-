const convert = (array) => {
  return array.reduce((acc, elem) => {
    const key = elem[0];
    const value = Array.isArray(elem[1]) ? convert(elem[1]) : elem[1];
    acc[key] = value;
    return acc;
  }, {});
};
export default convert;

// лучшее решение
// const convert = (arr) => arr.reduce((acc, item) => {
//   const [key, value] = item;
//   const newValue = Array.isArray(value) ? convert(value) : value;
//   return { ...acc, [key]: newValue };
// }, {});


console.log(convert([]));