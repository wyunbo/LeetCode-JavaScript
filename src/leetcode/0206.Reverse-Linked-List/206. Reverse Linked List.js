/**
 * Recursion
 * @param {*} head
 */
const reverseListR = (head) => {
  if (!head || !head.next) {
    return head;
  }
  const next = head.next;
  const newHead = reverseListR(next);

  head.next = null;
  next.next = head;

  return newHead;
};

const reverseList = (head) => {
  let prev = null;
  let curr = head;
  let next = null;
  while (curr) {
    next = curr.next; // head.next
    curr.next = prev; // head.next = null
    prev = curr; // prev = head
    curr = next; // curr = headNext
  }
  return prev;
};

export { reverseListR, reverseList };
