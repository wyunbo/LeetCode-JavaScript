import maxDepth from './104. Maximum Depth of Binary Tree';
import { deserializeTree, NULL } from '../../utils/tree-util';
test('Maximum Depth of Binary Tree', () => {
  expect(maxDepth(deserializeTree([3, 9, 20, NULL, NULL, 15, 7]))).toEqual(3);
});
