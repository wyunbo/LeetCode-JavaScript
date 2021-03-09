const rightSideViewDFS = (root) => {
  const rightOutlineTree = (node, d, outline) => {
    if (!node || node.val === null) {
      return;
    } else if (!outline[d]) {
      outline[d] = node.val;
    }
    rightOutlineTree(node.right, d + 1, outline);
    rightOutlineTree(node.left, d + 1, outline);
    return outline;
  };
  return rightOutlineTree(root, 0, []) || [];
};

const rightSideViewBFS = (root) => {
  if (!root) {
    return [];
  }
  const outline = [];
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      if (i === len - 1) {
        outline.push(node.val);
      }
    }
  }
  return outline;
};

export { rightSideViewDFS, rightSideViewBFS };
