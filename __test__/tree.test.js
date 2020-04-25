import tree from '../dist/tree.js';

test('tree', () => {
  const actual1 = tree([[5], 1, [3, 4]]);
  const expected1 = [5, 3, 4];
  expect(actual1).toEqual(expected1);
  const actual2 = tree([1, 2, [3, 5], [[4, 3], 2]]);
  const expected2 = [3, 5, [4, 3], 2];
  expect(actual2).toEqual(expected2);
});