import lodash from 'lodash';

const sortDeps = (depens) => {
  const sort = [];

  const inDepth = (value) => {
    const alreadySorted = sort.includes(value);
    if (alreadySorted) return;

    const suchKey = lodash.has(depens, value);
    if (suchKey && depens[value].length > 0) {
      depens[value].forEach((element) => inDepth(element));
    }
    sort.push(value);
  };

  Object.keys(depens).forEach((key) => {
    const hasDependences = depens[key].length > 0;
    const notSorted = !sort.includes(key);
    if (notSorted) {
      hasDependences ? inDepth(key) : sort.push(key);
    }
  });
  return sort;
};
export default sortDeps;




const deps1 = {
  mongo: [],
  tzinfo: ['thread_safe'],
  uglifier: ['execjs'],
  execjs: ['thread_safe', 'json'],
  redis: [],
};
const deps2 = {
  wrong: ['predicated', 'sexp_processor'],
  xpath: ['nokogiri'],
  predicated: ['htmlentities'],
  sexp_processor: [],
  nokogiri: ['wrong'],
  virtus: [],
};
console.log(sortDeps(deps1));
console.log(sortDeps(deps2));
// => ['mongo', 'thread_safe', 'tzinfo', 'json', 'execjs', 'uglifier', 'redis'];