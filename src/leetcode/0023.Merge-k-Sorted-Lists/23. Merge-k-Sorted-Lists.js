const mergeKLists = (lists) => {
  const len = lists.length;
  if (len < 1) {
    return null;
  }
  if (len === 1) {
    return lists[0];
  }
  const mid = Math.floor(len / 2);
  const left = mergeKLists(lists.slice(0, mid));
  const right = mergeKLists(lists.slice(mid));
  return mergeTwoLists(left, right);
};
export default mergeKLists;
function mergeTwoLists(l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}
