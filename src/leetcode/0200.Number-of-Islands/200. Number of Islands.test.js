import numIslands from './200. Number of Islands';

test('Number of Islands', () => {
  const testCases = [
    [
      [
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
      ],
      1,
    ],
    [
      [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
      ],
      3,
    ],
  ];
  testCases.map((testCase) => {
    expect(numIslands(testCase[0])).toEqual(testCase[1]);
  });
});
