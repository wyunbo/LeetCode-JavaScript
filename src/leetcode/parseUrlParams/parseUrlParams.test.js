import parse from './parseUrlParams';

describe('parse url parameters', () => {
  const testCases = [
    ['a=1&b=2&c=3', { a: '1', b: '2', c: '3' }],
    [
      'a[name]=LeBron&a[company]=Laker&a[city]=Los%20Angel&b[name]=Jordan&c=123',
      {
        a: {
          name: 'LeBron',
          company: 'Laker',
          city: 'Los Angel',
        },
        b: {
          name: 'Jordan',
        },
        c: '123',
      },
    ],
  ];
  testCases.forEach((testCase, ind) => {
    it(`Test case ${ind}`, () => {
      expect(parse(testCase[0])).toEqual(testCase[1]);
    });
  });
});
