import reverseString from './344. Reverse String';

test('Reverse String', () => {
  expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toEqual([
    'o',
    'l',
    'l',
    'e',
    'h',
  ]);
  expect(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])).toEqual([
    'h',
    'a',
    'n',
    'n',
    'a',
    'H',
  ]);
});
