import convert from '../dist/convertArrayToObject';

test('Convert', () => {
  expect(convert([['key', 'value']])).toEqual({ key: 'value' });
  expect(convert([])).toEqual({});
  expect(convert([['key', 'value'], ['key2', 'value2']])).toEqual({ key: 'value', key2: 'value2' });
  expect(convert([
    ['key', [['key2', 'anotherValue']]],
    ['key2', 'value2']
  ])).toEqual({ key: { key2: 'anotherValue' }, key2: 'value2' });
});