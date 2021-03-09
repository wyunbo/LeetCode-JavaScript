import { deserializeTree, serializeTree, NULL } from '../../utils/tree-util';
import {
  rightSideViewDFS,
  rightSideViewBFS,
} from './199. Binary Tree Right Side View';
describe('Right side view', () => {
  const testCases = [
    [
      [1, 2, 3, NULL, 5, NULL, 4],
      [1, 3, 4],
    ],
    // [
    //   [0, 1, 2, NULL, 3, 4, NULL, NULL, 5, 9, NULL, NULL, 6, 10, NULL],
    //   [0, 2, 4, 9, 10],
    // ],
  ];
  testCases.map((testCase, index) => {
    it(`Test case ${index + 1} (DFS)`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const received = rightSideViewDFS(root);
      expect(received).toEqual(expected);
    });
    it(`Test case ${index + 1} (BFS)`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const received = rightSideViewBFS(root);
      expect(received).toEqual(expected);
    });
  });
});
