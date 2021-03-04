import { deserializeTree, serializeTree } from '../../utils/tree-util';
import invertTree from './226. Invert Binary Tree';
test('Invert Binary Tree', () => {
  const testCases = [[[4, 2, 7, 1, 3, 6, 9], '4,7,2,9,6,3,1']];
  testCases.map((testCase) => {
    const root = deserializeTree(testCase[0]);
    const expected = testCase[1];
    const received = serializeTree(invertTree(root));
    expect(received).toEqual(expected);
  });
});
