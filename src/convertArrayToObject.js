const convert = (array) => {
  return array.reduce((acc, elem) => {
    const key = elem[0];
    const value = Array.isArray(elem[1]) ? convert(elem[1]) : elem[1];
    acc[key] = value;
    return acc;
  }, {});
};
export default convert;

console.log(convert([]));