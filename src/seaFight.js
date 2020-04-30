import _ from 'lodash';

// для начала нужно окружить поле нулями чтобы не было ошибок
// Основной принцип - проверяем каждую единичку в море
// Если вокруг нее только нули - значит это отдельный корабль
// Если вокруг 2 нуля то значит это часть корабля
// Если вокруг три нуля это "нос" корабля (плюсуем их и делим на 2)

const calcShipsCount = (ships) => {
  if (ships.length === 0) {
    return 0;
  }
  
  let count = 0;
  
  const sea = [];
  sea.push( _.times(ships[0].length + 2, _.constant(0)) );
  for (let i = 0; i < ships.length; i += 1) {
    sea.push([0, ...ships[i], 0]);
  }
  sea.push( _.times(ships[0].length + 2, _.constant(0)) );

  for (let i = 1; i < sea.length - 1; i += 1) {
    for (let j = 1; j < sea[0].length - 1; j += 1) {
      if (sea[i][j] === 1) {
        const up = sea[i - 1][j] === 0 ? 1 : 0;
        const down = sea[i + 1][j] === 0 ? 1 : 0;
        const right = sea[i][j + 1] === 0 ? 1 : 0;
        const left = sea[i][j - 1] === 0 ? 1 : 0;
        const check = up + right + down + left;
        if (check === 4) {
          count += 1;
        }
        if (check === 3) {
          count += 0.5;
        }
      }
    }
  }
  return count;
};
export default calcShipsCount;

console.log(
calcShipsCount([
  [0, 1, 0, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 0],
]) // 5
)

