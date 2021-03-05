import {
  deserializeLinkedList,
  serializeLinkedList,
} from '../../utils/linked-list-util';
import mergeTwoLists from './21. Merge-Two-Sorted-Lists';

test('Merge Two Sorted Lists', () => {
  expect(
    serializeLinkedList(
      mergeTwoLists(
        deserializeLinkedList('1,2,4'),
        deserializeLinkedList('1,3,4')
      )
    )
  ).toEqual('1,1,2,3,4,4');
});
