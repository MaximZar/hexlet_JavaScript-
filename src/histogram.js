import lodash from 'lodash';

const dRoll = () => 2;
const histogram = (count, diceRoll) => {
  const bar = lodash.constant('### ');

  // const throws = lodash.times(count, diceRoll).reduce((accum, value) => {
  //   accum[value - 1] += 1;
  //   return accum;
  // }, [0, 0, 0, 0, 0, 0]);
  const throws = [2, 4, 7, 3, 0, 1];
  const maxValue = Math.max(...throws);
  const table = throws.reduce((accum, value, index) => {
    const number = index + 1;
    let procent = (`${Math.round(value / count * 100)}%`); 
    procent = procent === '0%' ? '' : procent;
    procent = procent.length < 4 ? `${procent}${' '.repeat(4 - procent.length)}` : procent;
    const hg = lodash.times(value, bar);
    const space = lodash.times(maxValue - value, lodash.constant('    '));
    let vertHg = lodash.concat(space, [procent], hg, '----', ` ${number}  `);
    vertHg = index === 5 ? vertHg.map((element) => element.substring(0, element.length - 1)) : vertHg;
    accum[index] = vertHg;
    return accum;
  }, []);

  const result = [];
  for (let i = 0; i < maxValue + 3; i += 1) {
    result.push(
      table.reduce((accum, value) => {
        accum.push(value[i]);
        return accum;
      }, []).join('').trimRight()
    );
  }
  console.log(result.join('\n'));
};
export default histogram;

console.log(histogram(19, dRoll));
