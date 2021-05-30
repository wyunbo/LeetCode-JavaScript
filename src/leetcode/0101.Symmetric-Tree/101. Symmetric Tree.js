/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 *
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 *
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 * But the following [1,2,2,null,3,null,3] is not:
 *     1
 *    / \
 *   2   2
 *    \   \
 *    3    3
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
 */

/**
 * Recursion Solution
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
  if (!root) {
    return true;
  }
  const isMirror = (p, q) => {
    if (!p && !q) {
      return true;
    }
    if (!p || !q) {
      return false;
    }
    return (
      p.val === q.val && isMirror(p.left, q.right) && isMirror(p.right, q.left)
    );
  };
  return isMirror(root.left, root.right);
};
