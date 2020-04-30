import _ from 'lodash';

const diagram = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const dgm = [];
  arr.forEach(element => {
    const star = '*';
    const tb = element > 0 ? '*'.repeat(element) : '#'.repeat(Math.abs(element));
    const line = element > 0 ? `${' '.repeat(max - element)}${tb}${' '.repeat(Math.abs(min))}` : `${' '.repeat(max)}${tb}${' '.repeat(Math.abs(min) - element)}`;
    dgm.push(line);
  });
  const result = [];
  for (let i = 0; i < max + Math.abs(min); i += 1) {
    const line = dgm.reduce((accum, element) => {
      accum.push(element[i]);
      return accum;
    }, []).join('').trimRight();
    result.push(line);
  }
  console.log(result.join('\n'));
};
export default diagram;

console.log(diagram(
  [5, 10, -5, -3, 7]
));